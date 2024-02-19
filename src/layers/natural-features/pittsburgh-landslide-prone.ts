import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "pittsburgh-landslide-prone",
  title: "Landslide Prone Areas",
  type: GeoType.Polygon,
  description: "Landslide Prone areas in the City of Pittsburgh",
  resourceID: "b5b45ac6-f8ef-4805-b4e4-fc7c63fb4075",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/pittsburgh-landslide-prone",
  source: {
    title: "WPRDC - Pittsburgh Landslide Prone",
    url: "https://data.wprdc.org/dataset/landslide-prone-areas",
  },
  color: "#9F8170",
};

export default layer;
