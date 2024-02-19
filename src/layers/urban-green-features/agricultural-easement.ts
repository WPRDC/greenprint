import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "agricultural-easement",
  title: "Agricultural Easements",
  type: GeoType.Polygon,
  description: "Areas designated for agricultural easement.",
  resourceID: "0335f47a-ed05-4664-8ba3-7ddffd6828bc",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_agricultural_easements._geom",
  sourceLayer: "table.allegheny_greenways_agricultural_easements._geom",
  color: "#BF9B37",
  filter: ["==", "Type", "Agricultural Easements"],
};

export default layer;
