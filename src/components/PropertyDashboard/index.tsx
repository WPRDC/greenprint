import { fetchBaseParcelData } from "@/lib/api";
import Image from "next/image";
import { makeAddress } from "@/lib/util";
import { FieldValues } from "@/components/FieldValues";
import { OwnerInfo } from "@/components/PropertyDashboard/OwnerInfo";
import { Suspense } from "react";
import { OwnerInfoSkeleton } from "./OwnerInfoSkeleton";
import { ClassChip } from "@/components/PropertyDashboard/ClassChip";
import { AssessmentSection } from "@/components/PropertyDashboard/sections/AssessmentSection";
import { SalesSection } from "@/components/PropertyDashboard/sections/SalesSection";
import { Card } from "./Card";
import { formatDate } from "../util";
import { AssessmentAppealsSection } from "@/components/PropertyDashboard/sections/AssessmentAppealsSection";
import { FiledAssessmentAppealsSection } from "@/components/PropertyDashboard/sections/FiledAssessmentAppealsSection";
import { CityViolationsSection } from "@/components/PropertyDashboard/sections/CityViolationsSection";
import { PLIPermitsSection } from "@/components/PropertyDashboard/sections/PLIPermitsSection";
import { ForeclosureFilingSection } from "@/components/PropertyDashboard/sections/ForeclosureFilingsSection";
import { ConservatorshipRecordSection } from "@/components/PropertyDashboard/sections/ConservatorshipSection";
import { TaxLiensSection } from "@/components/PropertyDashboard/sections/TaxLIensSection";

export interface PropertyDashboardProps {
  parcelID: string;
}

export async function PropertyDashboard({ parcelID }: PropertyDashboardProps) {
  const {
    assessment,
    // assessmentAppeals,
    // fieldAssessmentAppeal,
    // pliPermits,
    // cityViolations,
    // foreclosureFilings,
    // currentTaxLiens,
    // conservatorshipRecords,
    parcelBoundaries,
  } = await fetchBaseParcelData(parcelID);

  const imgURL = `https://iasworld.alleghenycounty.us/iasworld/iDoc2/Services/GetPhoto.ashx?parid=${parcelID}&jur=002`;
  if (!assessment || !parcelBoundaries) return null;

  const [addressLine, cityLine] = makeAddress(assessment.record);
  return (
    <div className="bg-stone-300 pb-4">
      <div className="relative h-52 w-full">
        <div className="absolute inset-x-2 bottom-2 z-10 h-fit rounded-sm bg-lightgreen/50 p-2 backdrop-blur-md">
          <div className="font-roboto pb-0.5 text-4xl font-bold leading-none">
            {addressLine}
          </div>
          <div className="font-roboto text-lg font-medium leading-none">
            {cityLine}
          </div>
        </div>
        <Image src={imgURL} alt="img" fill className="object-cover" />
        <div className="absolute right-2 top-2 z-20 flex flex-col items-end space-y-1">
          <ClassChip parcelClass={assessment.record.CLASSDESC} />
          <ClassChip parcelClass={assessment.record.USEDESC} />
        </div>
      </div>

      <div>
        <div className="my-2 flex items-stretch">
          <Card className="my-0 mr-1 w-full">
            <FieldValues
              items={[
                {
                  id: "parcel_id",
                  label: "Parcel ID",
                  value: assessment.record?.PARID,
                },
              ]}
            />
          </Card>
          <Card className="my-0 ml-1 w-full">
            <FieldValues
              items={[
                {
                  id: "map_block_lot_no",
                  label: "Block Lot No",
                  value:
                    parcelBoundaries.records &&
                    parcelBoundaries.records[0].MAPBLOCKLO,
                },
              ]}
            />
          </Card>
        </div>
        <Card>
          <Suspense fallback={<OwnerInfoSkeleton />}>
            <OwnerInfo parcelID={parcelID} assessment={assessment.record} />
          </Suspense>
        </Card>
        <AssessmentSection {...assessment} />
        <Suspense>
          <SalesSection
            parcelID={parcelID}
            assessmentSales={[
              {
                date: formatDate(assessment.record.SALEDATE),
                type: assessment.record.SALEDESC,
                price: assessment.record.SALEPRICE,
              },
              {
                date: formatDate(assessment.record.PREVSALEDATE),
                type: undefined,
                price: assessment.record.PREVSALEPRICE,
              },
              {
                date: formatDate(assessment.record.PREVSALEDATE2),
                type: undefined,
                price: assessment.record.PREVSALEPRICE2,
              },
            ]}
          />
        </Suspense>

        <Suspense>
          <PLIPermitsSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <CityViolationsSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <FiledAssessmentAppealsSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <AssessmentAppealsSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <ForeclosureFilingSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <TaxLiensSection parcelID={parcelID} />
        </Suspense>

        <Suspense>
          <ConservatorshipRecordSection parcelID={parcelID} />
        </Suspense>
      </div>
    </div>
  );
}
