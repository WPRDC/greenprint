import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { ColoringMode, Extent, GeoType } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "slope-25",
  title: "Slope > 25%",
  type: GeoType.Polygon,
  description: "Land with a slope greater than 25%",
  resourceID: "5ce91a56-0799-46ea-9585-13fa8db5979e",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/slope-25",
  source: {
    title: "WPRDC - Slope > 25%",
    url: "https://data.wprdc.org/dataset/25-or-greater-slope",
  },
  color: "#708090",
};

export default layer;
