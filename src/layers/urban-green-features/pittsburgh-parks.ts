import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "pittsburgh-parks",
  title: "City Parks",
  type: GeoType.Polygon,
  description: "Parks managed by the City of Pittsburgh",
  resourceID: "ca4ee6a6-3058-487f-9724-2a335b2d79f2",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  source: {
    title: "WPRDC - Pittsburgh Parks",
    url: "https://data.wprdc.org/dataset/parks",
  },
  color: "#006d2c",
};

export default layer;
