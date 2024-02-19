import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "share-the-road",
  title: "Bike Lane/Share the Road",
  type: GeoType.Polygon,
  description: "Areas designated as Bike Lanes",
  resourceID: "e6a4f3f0-6308-440a-bddd-9b9612b6cc4e",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_bike_lane._geom",
  sourceLayer: "table.allegheny_greenways_bike_lane._geom",
  color: "#89837E",
};

export default layer;
