import { DatastoreTable, FiledAssessmentAppeal } from "@/types";
import { Card } from "@/components/PropertyDashboard/Card";
import { fetchSingleParcelRecord } from "@/lib/api";
import { FieldValues } from "@/components/FieldValues";
import { Note } from "@/components/Typography";

export interface FiledAssessmentAppealsSectionProps {
  parcelID: string;
}

export async function FiledAssessmentAppealsSection({
  parcelID,
}: FiledAssessmentAppealsSectionProps) {
  const filed = await fetchSingleParcelRecord<FiledAssessmentAppeal>(
    parcelID,
    DatastoreTable.FiledAssessmentAppeals,
  );

  return (
    <div>
      <Card label="Currently Filed Asessment Appeal">
        {(!filed || !filed.record) && <Note>No Records Found</Note>}
        {!!filed && !!filed.record && (
          <FieldValues
            variant="dense"
            items={[
              {
                id: "on_behalf_of",
                label: filed?.fields.on_behalf_of.info?.label,
                info: filed?.fields.on_behalf_of.info?.notes,
                value: filed.record.on_behalf_of,
              },
              {
                id: "hearing_status",
                label: filed?.fields.hearing_status.info?.label,
                info: filed?.fields.hearing_status.info?.notes,
                value: filed.record.hearing_status,
              },
              {
                id: "prev_taxyr_mkt_value",
                label: filed?.fields.prev_taxyr_mkt_value.info?.label,
                info: filed?.fields.prev_taxyr_mkt_value.info?.notes,
                value: filed.record.prev_taxyr_mkt_value,
              },
              {
                id: "cur_mkt_value",
                label: filed?.fields.cur_mkt_value.info?.label,
                info: filed?.fields.cur_mkt_value.info?.notes,
                value: filed.record.cur_mkt_value,
              },
            ]}
          />
        )}
      </Card>
    </div>
  );
}
