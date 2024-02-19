import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { prt } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "transit-stops",
  title: "Public Transit Stops",
  type: GeoType.Point,
  description: "Public Transit Stops",
  resourceID: "d6e6ed6e-9220-4a0e-9796-e72d83ce8e7a",
  publisher: prt,
  extent: Extent.County,
  tileJSONSource: "https://data.wprdc.org/tiles/table.prt_stops._geom",
  sourceLayer: "table.prt_stops._geom",
  source: {
    title: "WPRDC - Port Authority of Allegheny County Transit Stops",
    url: "https://data.wprdc.org/dataset/prt-of-allegheny-county-transit-stops",
  },
  color: "#4C4C7F",
};

export default layer;
