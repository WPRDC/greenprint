import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "trails",
  title: "Trails",
  type: GeoType.Line,
  description: "Trails throughout Allegheny County",
  resourceID: "e6a4f3f0-6308-440a-bddd-9b9612b6cc4e",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_trails._geom",
  sourceLayer: "table.allegheny_greenways_trails._geom",
  color: "#4F4D24",
  // sql: "SELECT * FROM greenways_final WHERE type = 'Trails'",
};

export default layer;
