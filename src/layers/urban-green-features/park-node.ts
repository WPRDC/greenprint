import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "park-node",
  title: "Park Nodes",
  type: GeoType.Polygon,
  description: "Park nodes",
  resourceID: "e6a4f3f0-6308-440a-bddd-9b9612b6cc4e",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_park_nodes._geom",
  sourceLayer: "table.allegheny_greenways_park_nodes._geom",
  color: "#41ab5d",
};

export default layer;
