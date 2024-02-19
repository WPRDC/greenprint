import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "municipal-parks",
  title: "Municipal Parks",
  type: GeoType.Polygon,
  description: "Municipal Parks in Allegheny County",
  resourceID: "0335f47a-ed05-4664-8ba3-7ddffd6828bc",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_municipal_parks._geom",
  sourceLayer: "table.allegheny_greenways_municipal_parks._geom",
  color: "#238b45",
  // sql: "SELECT * FROM greenways_final WHERE type = 'Municipal Parks'",
};

export default layer;
