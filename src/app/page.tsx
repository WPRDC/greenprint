import { LayerMenu } from "@/components/LayerMenu";
import { Map } from "@/components/Map";
import { PropertyDashboard } from "@/components/PropertyDashboard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { LoadingMessage } from "@/components/LoadingMessage";
import PulseLoader from "react-spinners/PulseLoader";
import { TbUser } from "react-icons/tb";
import { OwnerInfoSkeleton } from "@/components/PropertyDashboard/OwnerInfoSkeleton";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let parcelID = searchParams?.parcel;
  const address = searchParams?.address;
  if (Array.isArray(parcelID)) {
    parcelID = parcelID[0];
  }

  return (
    <main className="flex flex-grow overflow-hidden">
      <LayerMenu />
      <div className="max-h-full flex-grow ">
        <Map selectedParcel={parcelID}></Map>
      </div>
      <div className="w-full max-w-md overflow-auto border-l border-blue-800">
        {!!parcelID && typeof parcelID === "string" && (
          <Suspense
            key={parcelID}
            fallback={
              <div className="flex h-full items-center">
                <div className="w-full pb-20 text-center">
                  <LoadingMessage
                    message={`Loading data for ${address ?? parcelID}`}
                  />
                </div>
              </div>
            }
          >
            <PropertyDashboard parcelID={parcelID} />
          </Suspense>
        )}
      </div>
    </main>
  );
}
