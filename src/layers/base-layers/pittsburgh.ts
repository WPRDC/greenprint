import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "pittsburgh",
  title: "Pittsburgh Border",
  type: GeoType.Polygon,
  description: "Boundary of the City of Pittsburgh",
  resourceID: "11af0bf9-2d04-4e71-b28c-a0dfb3078080",
  tileJSONSource: "https://data.wprdc.org/tiles/municipalities",
  sourceLayer: "b0cb0249-d1ba-45b7-9918-dc86fa8af04c",
  extent: Extent.Pittsburgh,
  publisher: pgh,
  source: {
    title: "Pittsburgh City Boundary",
    url: "https://data.wprdc.org/dataset/pittsburgh-city-boundary",
  },
  color: "#000",
  opacity: 0,
  borderWidth: 4,
  filter: ["==", "NAME", "PITTSBURGH"],
};

export default layer;
