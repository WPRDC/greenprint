import { fetchOwnerName } from "@/lib/api";
import { PropertyAssessment } from "@/types";
import { TbUser } from "react-icons/tb";
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
    <section className="mb-4">
      <FieldValues
        items={[
          {
            id: "owner-info",
            label: (
              <div className="flex items-center">
                <TbUser />
                <div className="text-xs font-bold uppercase text-stone-500">
                  Owner
                </div>
              </div>
            ),
            value: (
              <div>
                <div className="font-mono">{owner}</div>
                <div className="font-mono">{address}</div>
              </div>
            ),
          },
        ]}
      />
    </section>
  );
}
