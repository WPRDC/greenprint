import { ReactElement, ReactNode } from "react";
import { Extent, GeoType, Publisher } from "@/types/shared";
import { Value } from "./shared";
export type Size = "S" | "M" | "L" | "XL";

export interface LayerMenuItemOptions {
  name: string;
  geoType: GeoType;
  extent: Extent;
  publisher: Publisher;
}

export interface FieldValue {
  id: number | string;
  label: ReactNode;
  value?: Value | ReactElement;
  format?: (value: Value) => ReactNode;
}

export enum DatastoreTable {
  Assessment = "property_assessments",
  PropertySaleTransactions = "property_sale_transactions",
  AssessmentAppeals = "archive_assessment_appeals",
  FiledAssessmentAppeals = "filed_assessment_appeals",
  PLIPermit = "pli_permits",
  CityViolations = "city_violations",
  ForeclosureFilings = "foreclosure_filings",
  TaxLiensWithCurrentStatus = "tax_liens_with_current_status",
  ConservatorshipRecord = "conservatorship_record",
  ParcelBoundaries = "parcel_boundaries",
}

export const parcelIDFields: Record<DatastoreTable, string> = {
  [DatastoreTable.Assessment]: "PARID",
  [DatastoreTable.PropertySaleTransactions]: "PARID",
  [DatastoreTable.AssessmentAppeals]: "PARCEL ID",
  [DatastoreTable.FiledAssessmentAppeals]: "PARCEL ID",
  [DatastoreTable.PLIPermit]: "parcel_num",
  [DatastoreTable.CityViolations]: "parcel_id",
  [DatastoreTable.ForeclosureFilings]: "PIN",
  [DatastoreTable.TaxLiensWithCurrentStatus]: "pin",
  [DatastoreTable.ConservatorshipRecord]: "pin",
  [DatastoreTable.ParcelBoundaries]: "PIN",
};

export * from "./shared";
export * from "./mapping";
export * from "./templates";
export * from "./model";
