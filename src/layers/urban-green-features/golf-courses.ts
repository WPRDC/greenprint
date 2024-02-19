import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "golf-courses",
  title: "Golf Courses",
  type: GeoType.Polygon,
  description: "Golf courses in Allegheny County",
  resourceID: "0335f47a-ed05-4664-8ba3-7ddffd6828bc",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_golf_courses._geom",
  sourceLayer: "table.allegheny_greenways_golf_courses._geom",
  color: "#f781bf",
  // sql: "SELECT * FROM greenways_final WHERE type = 'Golf Courses'",
};

export default layer;
