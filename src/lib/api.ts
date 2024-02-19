import "server-only";

import {
  ArchiveAssessmentAppeal,
  CityViolation,
  ConservatorshipRecord,
  DatastoreTable,
  FiledAssessmentAppeal,
  ForeclosureFiling,
  ParcelBoundary,
  parcelIDFields,
  PLIPermit,
  PropertyAssessment,
  PropertySaleTransaction,
  TaxLienWithCurrentStatus,
} from "@/types";

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

export async function fetchSQLSearch<T>(
  sql: string,
  queryParams: Record<string, string> = {},
  options: RequestInit = {},
): Promise<T[] | undefined> {
  try {
    // Build request URL
    const requestUrl = `${HOST}/api/action/datastore_search_sql?${new URLSearchParams(
      { ...queryParams, sql },
    ).toString()}`;
    // Trigger API call
    const response = await fetch(requestUrl, options);
    const body: { result: { records: T[] } } = await response.json();
    const result = body["result"];
    if (result) return result["records"];
    else return undefined;
  } catch (error) {
    console.error(error);
    throw new Error(String(error));
  }
}

export function fetchParcelRecords<T>(
  parcelID: string,
  table: DatastoreTable,
): Promise<T[] | undefined> {
  const parcelIDField = parcelIDFields[table];
  return fetchSQLSearch<T>(
    `SELECT * FROM ${table} WHERE "${parcelIDField}" = '${parcelID}'`,
  );
}

export async function fetchSingleParcelRecord<T>(
  parcelID: string,
  table: DatastoreTable,
): Promise<T | undefined> {
  const results = await fetchParcelRecords<T>(parcelID, table);
  if (!results) {
    console.warn(`Nothing found for ${parcelID} on table ${table}.`);
    return undefined;
  }
  if (results.length > 1)
    console.warn(
      `More than one record found for ${parcelID} on table ${table}.`,
    );
  return results[0];
}

export async function fetchParcelData(parcelID: string) {
  const assessmentPromise = fetchSingleParcelRecord<PropertyAssessment>(
    parcelID,
    DatastoreTable.Assessment,
  );
  const salesPromise = fetchParcelRecords<PropertySaleTransaction>(
    parcelID,
    DatastoreTable.PropertySaleTransactions,
  );
  const assessmentAppealsPromise = fetchParcelRecords<ArchiveAssessmentAppeal>(
    parcelID,
    DatastoreTable.AssessmentAppeals,
  );
  const fieldAssessmentAppealPromise =
    fetchSingleParcelRecord<FiledAssessmentAppeal>(
      parcelID,
      DatastoreTable.FiledAssessmentAppeals,
    );
  const pliPermitsPromise = fetchParcelRecords<PLIPermit>(
    parcelID,
    DatastoreTable.PLIPermit,
  );
  const cityViolationsPromise = fetchParcelRecords<CityViolation>(
    parcelID,
    DatastoreTable.CityViolations,
  );
  const foreclosureFilingsPromise = fetchParcelRecords<ForeclosureFiling>(
    parcelID,
    DatastoreTable.ForeclosureFilings,
  );
  const currentTaxLiensPromise = fetchParcelRecords<TaxLienWithCurrentStatus>(
    parcelID,
    DatastoreTable.TaxLiensWithCurrentStatus,
  );
  const conservatorshipRecordsPromise =
    fetchParcelRecords<ConservatorshipRecord>(
      parcelID,
      DatastoreTable.ConservatorshipRecord,
    );
  const parcelBoundaryPromise = fetchSingleParcelRecord<ParcelBoundary>(
    parcelID,
    DatastoreTable.ParcelBoundaries,
  );

  const [
    assessment,
    sales,
    assessmentAppeals,
    fieldAssessmentAppeal,
    pliPermits,
    cityViolations,
    foreclosureFilings,
    currentTaxLiens,
    conservatorshipRecords,
    parcelBoundary,
  ] = await Promise.all([
    assessmentPromise,
    salesPromise,
    assessmentAppealsPromise,
    fieldAssessmentAppealPromise,
    pliPermitsPromise,
    cityViolationsPromise,
    foreclosureFilingsPromise,
    currentTaxLiensPromise,
    conservatorshipRecordsPromise,
    parcelBoundaryPromise,
  ]);

  return {
    assessment,
    sales,
    assessmentAppeals,
    fieldAssessmentAppeal,
    pliPermits,
    cityViolations,
    foreclosureFilings,
    currentTaxLiens,
    conservatorshipRecords,
    parcelBoundary,
  };
}
