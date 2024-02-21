import { Card } from "@/components/PropertyDashboard/Card";
import { FieldValues } from "@/components/FieldValues";
import { fetchMultipleParcelRecords } from "@/lib/api";
import { DatastoreTable, PLIPermit } from "@/types";
import { Note } from "@/components/Typography";
import { RecordSection } from "../RecordSection";

export interface PLIPermitsSectionProps {
  parcelID: string;
}

export async function PLIPermitsSection({ parcelID }: PLIPermitsSectionProps) {
  const pliPermits = await fetchMultipleParcelRecords<PLIPermit>(
    parcelID,
    DatastoreTable.PLIPermit,
  );

  return (
    <Card label="Pittsburgh Building Permits">
      {!!pliPermits && !!pliPermits.records.length ? (
        pliPermits.records.map((record) => (
          <RecordSection key={record.permit_id}>
            <FieldValues
              fields={pliPermits.fields}
              record={record}
              variant="dense"
              items={[
                "permit_id",
                "issue_date",
                "permit_type",
                "work_type",
                "total_project_value",
              ]}
            />
            <FieldValues
              denseLabel
              fields={pliPermits.fields}
              record={record}
              items={["contractor_name", "work_description"]}
            />
          </RecordSection>
        ))
      ) : (
        <Note>Not permits found</Note>
      )}
    </Card>
  );
}
