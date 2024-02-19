import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

// todo: find a way to handle shapefiles or manually conver this one for now

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "bike-trails",
  title: "Bike Trails",
  type: GeoType.Line,
  description:
    "BikePGH developed this map in 2007 and has been publishing it both on paper and online ever since.",
  resourceID: "08c150ee-5bd6-4121-9db5-3cf5a189036b",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Pittsburgh Bike Map Geographic Data",
    url: "https://data.wprdc.org/dataset/shape-files-for-bikepgh-s-pittsburgh-bike-map",
  },
  color: "#007076",
};

export default layer;
