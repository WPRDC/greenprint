import { fetchOwnerName, fetchParcelData } from "@/lib/api";
import Image from "next/image";
import { makeAddress } from "@/lib/util";
import { FieldValues } from "@/components/FieldValues";
import { Table } from "@/components/Table";
import { Chip } from "@/components/Chip";
import { TbHomeHeart, TbLeaf, TbPigMoney } from "react-icons/tb";
import { GiFarmTractor } from "react-icons/gi";
import { OwnerInfo } from "@/components/PropertyDashboard/OwnerInfo";
import { Suspense } from "react";
import { OwnerInfoSkeleton } from "./OwnerInfoSkeleton";
import { Label } from "@/components/Typography";
import { ClassChip } from "@/components/PropertyDashboard/ClassChip";

export interface PropertyDashboardProps {
  parcelID: string;
}

export async function PropertyDashboard({ parcelID }: PropertyDashboardProps) {
  const {
    assessment,
    // sales,
    // assessmentAppeals,
    // fieldAssessmentAppeal,
    // pliPermits,
    // cityViolations,
    // foreclosureFilings,
    // currentTaxLiens,
    // conservatorshipRecords,
    parcelBoundary,
  } = await fetchParcelData(parcelID);

  const imgURL = `https://iasworld.alleghenycounty.us/iasworld/iDoc2/Services/GetPhoto.ashx?parid=${parcelID}&jur=002`;

  const [addressLine, cityLine] = makeAddress(assessment);
  if (!assessment) return null;
  return (
    <div>
      <div className="relative h-52 w-full">
        <div className="absolute inset-x-2 bottom-2 z-10 h-fit rounded-sm bg-lightgreen/50 p-2 backdrop-blur-md">
          <div className="pb-0.5 text-4xl font-bold leading-none">
            {addressLine}
          </div>
          <div className="text-lg font-medium leading-none">{cityLine}</div>
        </div>
        <Image src={imgURL} alt="img" fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex space-x-8">
          <FieldValues
            items={[
              { id: "parcel_id", label: "Parcel ID", value: assessment.PARID },
            ]}
          />
          <FieldValues
            items={[
              {
                id: "map_block_lot_no",
                label: "Block Lot No",
                value: parcelBoundary?.MAPBLOCKLO,
              },
            ]}
          />
        </div>

        <Suspense fallback={<OwnerInfoSkeleton />}>
          <OwnerInfo parcelID={parcelID} assessment={assessment} />
        </Suspense>

        <div>
          <ClassChip parcelClass={assessment.CLASSDESC} />
        </div>

        <div className="mb-5">
          <Label>Subsidies</Label>
          {!!assessment.HOMESTEADFLAG && (
            <Chip label="Homestead" icon={TbHomeHeart} variant="active" />
          )}
          {!!assessment.FARMSTEADFLAG && (
            <Chip label="Farmstead" icon={GiFarmTractor} variant="active" />
          )}
          {!!assessment.CLEANGREEN && (
            <Chip label="Clean & Green" icon={TbLeaf} variant="active" />
          )}
          {!!assessment.ABATEMENTFLAG && (
            <Chip
              label="Receives Abatement"
              icon={TbPigMoney}
              variant="active"
            />
          )}
          {!assessment.HOMESTEADFLAG &&
            !assessment.FARMSTEADFLAG &&
            !assessment.CLEANGREEN &&
            !assessment.ABATEMENTFLAG && (
              <div className="font-mono italic">None</div>
            )}
        </div>

        <FieldValues
          items={[
            {
              id: "municipality",
              label: "Municipality",
              value: assessment?.MUNIDESC,
            },
            {
              id: "schooldesc",
              label: "School District",
              value: assessment?.SCHOOLDESC,
            },
            {
              id: "TAXCODE",
              label: "Tax Status",
              value: assessment?.TAXDESC,
            },
            {
              id: "OWNERDESC",
              label: "Owner Type",
              value: assessment?.OWNERDESC,
            },
            {
              id: "CLASSDESC",
              label: "Class",
              value: assessment?.CLASSDESC,
            },
            {
              id: "deed",
              label: "Deed (book:page)",
              value: `${assessment.DEEDBOOK}:${assessment.DEEDPAGE}`,
            },
          ]}
        />

        <Table<number>
          label="Assessed Values"
          columns={["Building", "Land", "Total"]}
          rows={["Local", "County", "Fair Market"]}
          data={[
            [
              assessment.LOCALBUILDING,
              assessment.LOCALLAND,
              assessment.LOCALTOTAL,
            ],
            [
              assessment.COUNTYBUILDING,
              assessment.COUNTYLAND,
              assessment.COUNTYTOTAL,
            ],
            [
              assessment.FAIRMARKETBUILDING,
              assessment.FAIRMARKETLAND,
              assessment.FAIRMARKETTOTAL,
            ],
          ]}
          format={(v) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(v)
          }
        />
      </div>
    </div>
  );
}
