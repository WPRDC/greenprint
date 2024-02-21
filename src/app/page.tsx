import { LayerMenu } from "@/components/LayerMenu";
import { Map } from "@/components/Map";
import { PropertyDashboard } from "@/components/PropertyDashboard";
import { Suspense } from "react";
import { LoadingMessage } from "@/components/LoadingMessage";

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
      <div className="relative w-full max-w-md overflow-auto border-l border-blue-800">
        {!!parcelID ? (
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
        ) : (
          <div className="p-4">
            <div className="font-roboto mb-3 text-4xl font-medium">
              Welcome to Greenprint
            </div>
            <div>
              <p>
                To better inform land use decisions and ownership considerations
                ALT is developing an intersectional analysis of parcel status of
                the Greater Pittsburgh Region, with a focus on key regional
                initiatives. Urban greening is a multi-benefit solution to many
                of the issues facing the region, such as landslides, water
                management and combined sewer overflows; which have arisen from
                inappropriate development and poor and aging infrastructure.
                This “Greenprint” will emphasize greenspaces as solutions,
                recognizing that all forms of urban greening can positively
                contribute to the overall health and benefit of the area. The
                Greenprint will guide ALT, policy makers, and the community on
                the best uses of parcels to improve comprehensive regional
                planning and decision-making.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>
                  The Greenprint project is a full partnership between{" "}
                  <a href="https://alleghenylandtrust.org/">
                    Allegheny Land Trust
                  </a>{" "}
                  and{" "}
                  <a href="https://www.wprdc.org">
                    the Western Pennsylvania Regional Data Center
                  </a>
                  .
                </li>
                <li>
                  We (ALT and WPRDC) have worked together to obtain the datasets
                  for this project.{" "}
                </li>
                <li>
                  This is now a &ldquo;living&rdquo; project which will update
                  and evolve over time. You can view the code and submit issues
                  at the{" "}
                  <a href="https://github.com/WPRDC/greenprint">
                    Github Repository
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
