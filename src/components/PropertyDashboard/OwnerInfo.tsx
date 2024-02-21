import { fetchOwnerName } from "@/lib/api";
import { PropertyAssessment } from "@/types";
import { FieldValues } from "@/components/FieldValues";

export interface OwnerInfoProps {
  parcelID: string;
  assessment: PropertyAssessment;
}

export async function OwnerInfo({ parcelID, assessment }: OwnerInfoProps) {
  const owner = await fetchOwnerName(parcelID);

  const address = [
    assessment.CHANGENOTICEADDRESS1,
    assessment.CHANGENOTICEADDRESS2,
    assessment.CHANGENOTICEADDRESS3,
    assessment.CHANGENOTICEADDRESS4,
  ].join(" ");

  return (
    <FieldValues
      items={[
        {
          id: "owner-info",
          label: "Owner",
          value: (
            <div className="font-mono text-sm">
              <div>{owner}</div>
              <div>{address}</div>
            </div>
          ),
        },
      ]}
    />
  );
}
