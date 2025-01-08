"use client";

import * as React from "react";
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import ReactMapGL, {
  MapGeoJSONFeature,
  MapLayerMouseEvent,
  NavigationControl,
  Point,
} from "react-map-gl/maplibre";
import { basemaps } from "@/data/basemaps";
import { BasemapMenu } from "@/components/Map/BasemapMenu";
import { BaseMapID } from "@/types";
import { LayersContext } from "@/components/LayerProvider";
import { LayerGroup } from "@/components/Map/LayerGroup";
import { usePathname, useRouter } from "next/navigation";
import { extractFeatures } from "@/components/Map/util";
import { makeAddress } from "@/lib/util";
import { Button } from "react-aria-components";
import { TbX } from "react-icons/tb";
import { FaChevronCircleDown } from "react-icons/fa";
import { Legend } from "@/components/Legend";

const API_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY;

export interface MapProps {
  selectedParcel?: string;
}

export function Map({ children, selectedParcel }: PropsWithChildren<MapProps>) {
  const { selectedLayers } = useContext(LayersContext);

  const [basemap, setBasemap] = React.useState<BaseMapID>("basic");
  const [zoom, setZoom] = React.useState<ReactNode>();
  const [hoveredFeatures, setHoveredFeatures] = React.useState<
    MapGeoJSONFeature[] | null
  >(null);
  const [clickedFeatures, setClickedFeatures] = React.useState<
    MapGeoJSONFeature[] | null
  >(null);
  const [hoverPoint, setHoverPoint] = React.useState<Point | null>(null);
  const [clickPoint, setClickPoint] = React.useState<Point | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const interactiveLayerIDs = useMemo(() => {
    if (
      selectedLayers &&
      selectedLayers.map((l) => l.slug).includes("parcel-boundaries")
    ) {
      return ["parcel-boundaries-fill"];
    }
    return [];
  }, [selectedLayers]);

  const handleHover = useCallback((e: MapLayerMouseEvent) => {
    const features = extractFeatures(e);
    setHoveredFeatures(features);
    if (!!features && !!features.length) setHoverPoint(e.point);
    else setHoverPoint(null);
  }, []);

  function handleClick(e: MapLayerMouseEvent) {
    const features = extractFeatures(e);
    if (!!features && features.length === 1) {
      setClickPoint(null);
      setClickedFeatures(null);
      const feature = features[0];
      const parcelID = feature.properties["PIN"];
      if (parcelID) router.push(`${pathname}?parcel=${parcelID}`);
    }
    if (!!features && features.length > 1) {
      setClickPoint(e.point);
      setClickedFeatures(features);
    } else {
      setClickPoint(null);
      setClickedFeatures(null);
    }
  }

  function navigate(parcelID: string) {
    setClickPoint(null);
    setClickedFeatures(null);
    setHoverPoint(null);
    setHoveredFeatures(null);
    router.push(`${pathname}?parcel=${parcelID}`);
  }

  function getCursor(features?: MapGeoJSONFeature[] | null) {
    if (!features || !features.length) return "grab";
    if (features[0].properties.PIN == "COMMON GROUND") {
      return "not-allowed";
    }
    return "pointer";
  }

  return (
    <ReactMapGL
      initialViewState={{
        longitude: -80,
        latitude: 40.44,
        zoom: 11,
      }}
      onZoom={(e) => setZoom(e.target.getZoom().toFixed(2))}
      mapStyle={`${basemaps[basemap].url}?key=${API_KEY}`}
      interactive
      interactiveLayerIds={interactiveLayerIDs}
      onClick={handleClick}
      onMouseMove={handleHover}
      cursor={getCursor(hoveredFeatures)}
    >
      <NavigationControl showCompass visualizePitch />

      <div className="absolute right-12 top-2.5">
        <BasemapMenu onSelection={setBasemap} selectedBasemap={basemap} />
      </div>

      <div className="absolute left-2.5 top-2.5 rounded-sm border bg-white bg-white/60 p-1 text-xs font-bold backdrop-blur-md">
        Zoom: <span>{zoom}</span>
      </div>

      <div className="absolute bottom-5 right-2.5">
        <Legend layers={selectedLayers} />
      </div>

      {/* Popup on hover */}
      {!!hoverPoint && !!hoveredFeatures && !clickPoint && (
        <div
          className="pointer-events-none absolute mx-auto border border-transparent bg-white/60 pb-2 backdrop-blur-md"
          style={{ left: hoverPoint.x + 12, top: hoverPoint.y + 12 }}
        >
          <div className="px-2 py-1 text-left text-xs font-bold">
            {hoveredFeatures.length > 1 && "Click to open selection menu"}
          </div>
          {hoveredFeatures.map((feature, i) => (
            <div key={feature.id} className="px-2">
              {!!i && (
                <div className="flex items-center ">
                  <div className="w-8 border-t border-stone-700" />
                  <div className="mx-1 w-fit flex-shrink pb-0.5 italic">
                    and
                  </div>
                  <div className="flex-grow border-t border-stone-700" />
                </div>
              )}
              <HoverPopupRow feature={feature} />
            </div>
          ))}
        </div>
      )}

      {!!clickPoint && clickedFeatures && (
        <div
          className="absolute z-10 mx-auto border-2 border-lightgreen bg-white/80 pb-2 backdrop-blur-md"
          style={{ left: clickPoint.x + 12, top: clickPoint.y + 12 }}
        >
          <Button
            className="absolute right-1 top-1 font-bold hover:text-red-600"
            onPress={() => {
              setClickPoint(null);
              setClickedFeatures(null);
            }}
          >
            <TbX className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-1 px-2 py-1 text-left text-xs font-bold">
            <FaChevronCircleDown />
            <div>Select a parcel</div>
          </div>
          <div className="flex flex-col items-stretch">
            {clickedFeatures.map((feature, i) => (
              <div key={feature.id}>
                {!!i && (
                  <div className="flex items-center">
                    <div className="w-8 flex-shrink border-t border-stone-700" />
                    <div className="mx-1 w-fit flex-shrink pb-0.5 italic">
                      or
                    </div>
                    <div className="flex-grow border-t border-stone-700" />
                  </div>
                )}
                <Button
                  className="w-full px-2 text-left hover:bg-leafgreen/20 hover:backdrop-blur-md"
                  onPress={() => navigate(feature.properties.PIN)}
                >
                  <HoverPopupRow feature={feature} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedLayers &&
        selectedLayers.map((layerConfig) => (
          <LayerGroup
            key={layerConfig.slug}
            layer={layerConfig}
            context={{ hoveredFeatures, selectedParcel }}
          />
        ))}
      {children}
    </ReactMapGL>
  );
}

const HoverPopupRow = ({
  feature,
}: {
  feature: MapGeoJSONFeature;
}): ReactElement => {
  const { address, city, parcel_id } = feature.properties;
  return (
    <div className="text-lg font-bold">
      {address && <div className="font-sans leading-none">{address}</div>}
      {address && city && (
        <div className="mb-1 font-sans text-xs leading-none">{city}</div>
      )}
      <div className="font-mono text-xs">{parcel_id}</div>
    </div>
  );
};
