import { Card } from "@/components/PropertyDashboard/Card";
import { fetchMultipleParcelRecords } from "@/lib/api";
import { DatastoreTable, TaxLienWithCurrentStatus } from "@/types";
import { FieldValues } from "@/components/FieldValues";
import { Note } from "@/components/Typography";
import { RecordSection } from "../RecordSection";

export interface TaxLiensSectionProps {
  parcelID: string;
}

export async function TaxLiensSection({ parcelID }: TaxLiensSectionProps) {
  const taxLienss = await fetchMultipleParcelRecords<TaxLienWithCurrentStatus>(
    parcelID,
    DatastoreTable.TaxLiensWithCurrentStatus,
  );

  return (
    <Card label="Tax Liens">
      {!!taxLienss && !!taxLienss.records.length ? (
        <div>
          {taxLienss.records
            .sort(
              (a, b) => Date.parse(b.filing_date) - Date.parse(a.filing_date),
            )
            .map((record) => (
              <RecordSection key={`${record.filing_date}${record.dtd}`}>
                <FieldValues
                  variant="dense"
                  fields={taxLienss.fields}
                  record={record}
                  items={[
                    "dtd",
                    "filing_date",
                    "tax_year",
                    "lien_description",
                    "last_docket_entry",
                    "amount",
                    "assignee",
                    "satisfied",
                  ]}
                />
              </RecordSection>
            ))}
        </div>
      ) : (
        <Note>No liens found</Note>
      )}
    </Card>
  );
}
