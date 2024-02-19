import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { prt } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "transit-routes",
  title: "Public Transit Routes",
  type: GeoType.Line,
  description: "Public Transit Routes",
  resourceID: "4c3bf8b1-1bcd-42d6-bc7b-4c45be7da085",
  tileJSONSource: "https://data.wprdc.org/tiles/table.prt_routes._geom",
  sourceLayer: "table.prt_routes._geom",
  publisher: prt,
  extent: Extent.County,
  source: {
    title: "WPRDC - Port Authority of Allegheny County Transit Routes",
    url: "https://data.wprdc.org/dataset/prt-current-transit-routes",
  },
  color: "#9999FF",
};

export default layer;
