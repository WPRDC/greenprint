import "server-only";

import {
  APIMultiResult,
  APISingleResult,
  DatastoreTable,
  FieldDef,
  ParcelBoundary,
  parcelIDFields,
  PropertyAssessment,
  QueryResult,
} from "@/types";
import { toFieldLookup } from "@/components/util";

const HOST = process.env.NEXT_PUBLIC_API_HOST ?? "https://data.wprdc.org";

export async function fetchOwnerName(parcelID: string): Promise<string> {
  try {
    const requestURL = `https://tools.wprdc.org/property-whois/whois/${parcelID}/`;

    const response = await fetch(requestURL);
    const { name, success } = (await response.json()) as {
      name: string;
      success: boolean;
    };
    if (name) return name;
    else {
      throw new Error(`Owner not found for ${parcelID}`);
    }
  } catch (error) {
    console.error(`Owner not found for ${parcelID}`);
    throw new Error(`Owner not found for ${parcelID}`);
  }
}

export async function fetchSQLSearch<T extends object>(
  sql: string,
  queryParams: Record<string, string> = {},
  options: RequestInit = {},
): Promise<Partial<QueryResult<T>>> {
  try {
    // Build request URL
    const requestUrl = `${HOST}/api/action/datastore_search_sql?${new URLSearchParams(
      { ...queryParams, sql },
    ).toString()}`;
    // Trigger API call
    const response = await fetch(requestUrl, options);
    const body: {
      result: {
        records: T[];
        fields: FieldDef<T>[];
      };
    } = await response.json();
    const result = body["result"];
    if (result) return { fields: result["fields"], records: result["records"] };
    else return {};
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
}

export async function fetchDatastoreSearch<T extends object>(
  table: string,
  filters: string,
  queryParams: Record<string, string> = {},
  options: RequestInit = {},
): Promise<Partial<QueryResult<T>>> {
  try {
    // Build request URL
    const requestUrl = `${HOST}/api/action/datastore_search?${new URLSearchParams(
      { ...queryParams, id: table, filters },
    ).toString()}`;

    // Trigger API call
    const response = await fetch(requestUrl, options);
    const body: {
      result: {
        records: T[];
        fields: FieldDef<T>[];
      };
    } = await response.json();

    const result = body["result"];
    if (result) return { fields: result["fields"], records: result["records"] };
    else return {};
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
}

export function fetchParcelRecords<T extends object>(
  parcelID: string,
  table: DatastoreTable,
  queryParams?: Record<string, string>,
): Promise<Partial<QueryResult<T>>> {
  const parcelIDField = parcelIDFields[table];
  return fetchDatastoreSearch<T>(
    table,
    JSON.stringify({ [parcelIDField]: parcelID }),
    queryParams,
  );
}

export async function fetchSingleParcelRecord<T extends object>(
  parcelID: string,
  table: DatastoreTable,
  queryParams?: Record<string, string>,
): Promise<APISingleResult<T> | undefined> {
  const { fields, records } = await fetchParcelRecords<T>(
    parcelID,
    table,
    queryParams,
  );
  if (!records || !fields) {
    console.warn(`Nothing found for ${parcelID} on table ${table}.`);
    return undefined;
  }
  if (records.length > 1)
    console.warn(
      `More than one record found for ${parcelID} on table ${table}.`,
    );
  return { fields: toFieldLookup(fields), record: records[0] };
}

export async function fetchMultipleParcelRecords<T extends object>(
  parcelID: string,
  table: DatastoreTable,
  queryParams?: Record<string, string>,
): Promise<APIMultiResult<T> | undefined> {
  const { fields, records } = await fetchParcelRecords<T>(
    parcelID,
    table,
    queryParams,
  );
  if (!records || !fields) {
    console.warn(`Nothing found for ${parcelID} on table ${table}.`);
    return undefined;
  }
  return { fields: toFieldLookup(fields), records: records };
}

export async function fetchBaseParcelData(parcelID: string) {
  const assessmentPromise = fetchSingleParcelRecord<PropertyAssessment>(
    parcelID,
    DatastoreTable.Assessment,
  );
  const parcelBoundaryPromise = fetchMultipleParcelRecords<ParcelBoundary>(
    parcelID,
    DatastoreTable.ParcelBoundaries,
  );

  const [assessment, parcelBoundaries] = await Promise.all([
    assessmentPromise,
    parcelBoundaryPromise,
  ]);

  return {
    assessment,
    parcelBoundaries,
  };
}
