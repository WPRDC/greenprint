import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { growpgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "grow-pgh-gardens",
  title: "Food Gardens",
  type: GeoType.Point,
  description:
    "Food growing locations registered with Grow Pittsburgh. Data includes community gardens, community farms, schoolyard gardens, or urban farms. This data is included in Grow Pittsburgh's Grower's Map",
  resourceID: "dbdfcb3e-8fa5-4468-9b05-f69562798f7a",
  publisher: growpgh,
  extent: Extent.County,
  tileJSONSource: "https://data.wprdc.org/tiles/grow-pgh-gardens",
  source: {
    title: "WPRDC - Grow Pittsburgh Food Gardens",
    url: "https://data.wprdc.org/dataset/grow-pittsburgh-food-gardens",
  },
  color: "#e38633",
};

export default layer;
