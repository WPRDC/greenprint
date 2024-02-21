import { ArchiveAssessmentAppeal, DatastoreTable } from "@/types";
import { Card } from "@/components/PropertyDashboard/Card";
import { fetchMultipleParcelRecords } from "@/lib/api";
import { FieldValues } from "@/components/FieldValues";
import { formatDollars } from "@/lib/util";
import { Note } from "@/components/Typography";
import { RecordSection } from "../RecordSection";

export interface AssessmentAppealsSectionProps {
  parcelID: string;
}

export async function AssessmentAppealsSection({
  parcelID,
}: AssessmentAppealsSectionProps) {
  const archive = await fetchMultipleParcelRecords<ArchiveAssessmentAppeal>(
    parcelID,
    DatastoreTable.AssessmentAppeals,
  );

  return (
    <div>
      <Card label="Asessment Appeals History">
        {(!archive || !archive.records.length) && <Note>No Records Found</Note>}
        {!!archive &&
          !!archive.records.length &&
          archive?.records
            .filter((r) => r.HEARING_TYPE === "ANNUAL")
            .map((record) => (
              <RecordSection key={record["TAX YEAR"]}>
                <FieldValues
                  variant="dense"
                  items={[
                    {
                      id: "tax-year",
                      label: "Tax Year",
                      info: archive?.fields["TAX YEAR"].info?.notes,
                      value: record["TAX YEAR"],
                    },
                    {
                      id: "HEARING_TYPE",
                      label: "Hearing Type",
                      info: archive?.fields["HEARING_TYPE"].info?.notes,
                      value: record["HEARING_TYPE"],
                    },
                    {
                      id: "LAST UPDATE REASON",
                      label: "Last Update Reason",
                      info: archive?.fields["LAST UPDATE REASON"].info?.notes,
                      value: record["LAST UPDATE REASON"],
                    },
                    {
                      id: "COMPLAINANT",
                      label: "Complainant",
                      info: archive?.fields["COMPLAINANT"].info?.notes,
                      value: record["COMPLAINANT"],
                    },
                    {
                      id: "HEARING_STATUS",
                      label: "Hearing Status",
                      info: archive?.fields["HEARING_STATUS"].info?.notes,
                      value: record["HEARING_STATUS"],
                    },
                    {
                      id: "STATUS",
                      label: "Inspection Status",
                      info: archive?.fields["STATUS"].info?.notes,
                      value: record["STATUS"],
                    },
                  ]}
                />
                <div>
                  <div className="font-sans text-sm font-bold">
                    Pre vs Post Appeal
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <td></td>
                        <th>Land</th>
                        <th>Building</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      <tr>
                        <th className="text-left font-sans">Pre</th>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL LAND"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL BLDG"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL TOTAL"])}
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left font-sans">Post</th>
                        <td className="text-right">
                          {formatDollars(record["POST APPEAL LAND"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["POST APPEAL BLDG"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["POST APPEAL TOTAL"])}
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left font-sans">Difference</th>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL LAND"] -
                              record["POST APPEAL LAND"],
                          )}
                        </td>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL BLDG"] -
                              record["POST APPEAL BLDG"],
                          )}
                        </td>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL TOTAL"] -
                              record["POST APPEAL TOTAL"],
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <div className="font-sans text-sm font-bold">
                    Pre Appeal vs Current Value
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr>
                        <td></td>
                        <th>Land</th>
                        <th>Building</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                      <tr>
                        <th className="text-left font-sans">Pre</th>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL LAND"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL BLDG"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["PRE APPEAL TOTAL"])}
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left font-sans">Current</th>
                        <td className="text-right">
                          {formatDollars(record["CURRENT LAND VALUE"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["CURRENT BLDG VALUE"])}
                        </td>
                        <td className="text-right">
                          {formatDollars(record["CURRENT TOTAL VALUE"])}
                        </td>
                      </tr>
                      <tr>
                        <th className="text-left font-sans">Difference</th>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL LAND"] -
                              record["CURRENT LAND VALUE"],
                          )}
                        </td>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL BLDG"] -
                              record["CURRENT BLDG VALUE"],
                          )}
                        </td>
                        <td className="border-t border-black text-right">
                          {formatDollars(
                            record["PRE APPEAL TOTAL"] -
                              record["CURRENT TOTAL VALUE"],
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </RecordSection>
            ))}
      </Card>
    </div>
  );
}
