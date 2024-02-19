import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "sensitive-slope",
  title: "Sensitive Slope Areas",
  type: GeoType.Polygon,
  description: "Sensitive slope areas",
  resourceID: "0335f47a-ed05-4664-8ba3-7ddffd6828bc",
  publisher: ac,
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_sensitive_slopes._geom",
  sourceLayer: "table.allegheny_greenways_sensitive_slopes._geom",
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  color: "#888273",
};

export default layer;
