import { Layer, Source } from "react-map-gl/maplibre";
import { LayerOptions, MapContext, VisualOptions } from "@/types";
import { CircleLayer } from "./layers/circle";
import { LineLayer } from "./layers/line";
import { PolygonLayer } from "./layers/polygon";

export interface LayerGroupProps {
  layer: LayerOptions<VisualOptions>;
  context: MapContext;
}

const sourceName = (resourceID: string): string => `table.${resourceID}._geom`;

function toTileURL(resourceID: string, sql?: string) {
  const baseURL = "https://data.wprdc.org/tiles/";

  if (sql) {
    // todo: build function tile endpoint
    return `${baseURL}${sql}`;
  }
  return `${baseURL}${sourceName(resourceID)}`;
}

/**
 * LayerGroup that styles the map for the selected Layer
 */
export function LayerGroup({ layer, context }: LayerGroupProps) {
  const url = layer.tileJSONSource ?? toTileURL(layer.resourceID, layer.sql);

  let sourceLayer;
  if (layer.sourceLayer) {
    sourceLayer = layer.sourceLayer;
  } else if (layer.tileJSONSource) {
    sourceLayer = layer.resourceID;
  } else {
    sourceLayer = sourceName(layer.resourceID);
  }

  return (
    <Source
      id={layer.slug}
      type="vector"
      url={url}
      minzoom={layer.minZoom ?? 5}
      maxzoom={layer.maxZoom ?? 22}
    >
      {layer.type === "point" && (
        <CircleLayer
          layer={layer}
          sourceLayer={sourceLayer}
          context={context}
        />
      )}
      {layer.type === "polygon" && (
        <PolygonLayer
          layer={layer}
          sourceLayer={sourceLayer}
          context={context}
        />
      )}
      {layer.type === "line" && (
        <LineLayer layer={layer} sourceLayer={sourceLayer} context={context} />
      )}
    </Source>
  );
}
