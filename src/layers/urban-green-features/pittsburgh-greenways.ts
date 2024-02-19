import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "pittsburgh-greenways",
  title: "City Greenways",
  type: GeoType.Polygon,
  description: "Greenways in the City of Pittsburgh",
  resourceID: "7c2b901b-6328-4e40-99a3-4b5952cd6f31",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/pittsburgh-greenways",
  source: {
    title: "WPRDC - Greenways",
    url: "https://data.wprdc.org/dataset/greenways",
  },
  color: "#01796F",
};

export default layer;
