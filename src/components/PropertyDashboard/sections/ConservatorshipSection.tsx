import { Card } from "@/components/PropertyDashboard/Card";
import { fetchMultipleParcelRecords } from "@/lib/api";
import { ConservatorshipRecord, DatastoreTable } from "@/types";
import { FieldValues } from "@/components/FieldValues";
import { Note } from "@/components/Typography";
import { RecordSection } from "../RecordSection";

export interface ConservatorshipRecordSectionProps {
  parcelID: string;
}

export async function ConservatorshipRecordSection({
  parcelID,
}: ConservatorshipRecordSectionProps) {
  const conservatorship =
    await fetchMultipleParcelRecords<ConservatorshipRecord>(
      parcelID,
      DatastoreTable.ConservatorshipRecord,
    );

  return (
    <Card label="Conservatorship Petitions">
      {!!conservatorship && !!conservatorship.records.length ? (
        <div>
          {conservatorship.records.map((record) => (
            <RecordSection key={`${record.case_id}${record.filing_date}`}>
              <FieldValues
                variant="dense"
                fields={conservatorship.fields}
                record={record}
                items={[
                  "case_id",
                  "filing_date",
                  "party_type",
                  "party_name",
                  "last_activity",
                ]}
              />
            </RecordSection>
          ))}
        </div>
      ) : (
        <Note>No petitions found</Note>
      )}
    </Card>
  );
}
