import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pogoh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "pogoh-stations",
  title: "POGOH Stations",
  type: GeoType.Point,
  description: "POGOH Stations",
  resourceID: "722bace4-98a3-456b-9029-7d64090e5bd6",
  publisher: pogoh,
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/pogoh-stations",
  source: {
    title: "WPRDC - Healthy Ride Stations",
    url: "https://data.wprdc.org/dataset/healthyride-stations",
  },
  color: "#00abe0",
  // sql: "SELECT * FROM healthyridestations2017",
};

export default layer;
