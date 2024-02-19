import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { pgh } from "@/data/publishers";
import { Extent, GeoType, ColoringMode } from "@/types";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "city-steps",
  title: "City Steps",
  type: GeoType.Line,
  description: "Public Staircases in the City of Pittsburgh ",
  resourceID: "ff6dcffa-49ba-4431-954e-044ed519a4d7",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  source: {
    title: "WPRDC - Pittsburgh City Steps",
    url: "https://data.wprdc.org/dataset/city-steps",
  },
  color: "#7802DE",
  tileJSONSource: "https://data.wprdc.org/tiles/city-steps",
};

export default layer;
