import { fetchMultipleParcelRecords } from "@/lib/api";
import { CityViolation, DatastoreTable } from "@/types";
import { Note } from "@/components/Typography";
import { Card } from "@/components/PropertyDashboard/Card";
import { FieldValues } from "@/components/FieldValues";
import { RecordSection } from "../RecordSection";

export interface AssessmentSectionProps {
  parcelID: string;
}

export async function CityViolationsSection({
  parcelID,
}: AssessmentSectionProps) {
  const violations = await fetchMultipleParcelRecords<CityViolation>(
    parcelID,
    DatastoreTable.CityViolations,
  );

  return (
    <Card label="Pittsburgh City Code Violations">
      {!!violations && !!violations.records.length ? (
        <div>
          {violations.records.map((record) => (
            <RecordSection
              key={`${record.casefile_number}${record.investigation_date}`}
            >
              <FieldValues
                variant="dense"
                items={[
                  {
                    id: "casefile_number",
                    label: "Casefile Number",
                    value: record.casefile_number,
                  },
                  {
                    id: "investigation_date",
                    label: "Investigation Date",
                    value: record.investigation_date,
                  },

                  {
                    id: "violation_code_section",
                    label: "Violation Code Section",
                    value: record.violation_code_section,
                  },

                  {
                    id: "investigation_outcome",
                    label: "Investigation Outcome",
                    value: record.investigation_outcome,
                  },
                ]}
              />
              <FieldValues
                denseLabel
                items={[
                  {
                    id: "violation_description",
                    label: "Violation Description",
                    value: record.violation_description,
                  },
                  {
                    id: "violation_spec_instructions",
                    label: "Violation Spec Instructions",
                    value: record.violation_spec_instructions,
                  },
                  {
                    id: "investigation_findings",
                    label: "Investigation Findings",
                    value: record.investigation_findings,
                  },
                ]}
              />
            </RecordSection>
          ))}
        </div>
      ) : (
        <Note>No violations found</Note>
      )}
    </Card>
  );
}
