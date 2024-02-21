import { Card } from "@/components/PropertyDashboard/Card";
import { fetchMultipleParcelRecords } from "@/lib/api";
import { DatastoreTable, ForeclosureFiling } from "@/types";
import { FieldValues } from "@/components/FieldValues";
import { Note } from "@/components/Typography";
import { RecordSection } from "../RecordSection";

export interface ForeclosureFilingSectionProps {
  parcelID: string;
}

export async function ForeclosureFilingSection({
  parcelID,
}: ForeclosureFilingSectionProps) {
  const foreclosureFilings =
    await fetchMultipleParcelRecords<ForeclosureFiling>(
      parcelID,
      DatastoreTable.ForeclosureFilings,
    );

  return (
    <Card label="Foreclosure Filings">
      {!!foreclosureFilings && !!foreclosureFilings.records.length ? (
        <div>
          {foreclosureFilings.records.map((record) => (
            <RecordSection key={`${record.case_id}${record.filing_date}`}>
              <FieldValues
                variant="dense"
                fields={foreclosureFilings.fields}
                record={record}
                items={[
                  "filing_date",
                  "case_id",
                  "docket_type",
                  "amount",
                  "plaintiff",
                  "last_activity",
                ]}
              />
            </RecordSection>
          ))}
        </div>
      ) : (
        <Note>No filings found</Note>
      )}
    </Card>
  );
}
