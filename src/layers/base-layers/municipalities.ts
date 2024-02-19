import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "municipalities",
  title: "Municipalities",
  type: GeoType.Polygon,
  tileJSONSource: "https://data.wprdc.org/tiles/municipalities",
  description: "Municipalities in Allegheny County",
  extent: Extent.County,
  publisher: ac,
  resourceID: "b0cb0249-d1ba-45b7-9918-dc86fa8af04c",
  source: {
    title: "Allegheny County Municipal Boundaries",
    url: "https://data.wprdc.org/dataset/allegheny-county-municipal-boundaries",
  },
  color: "#000",
  opacity: 0,
  noLegend: true,
};

export default layer;
