import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { grounded } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "lots-to-love",
  title: "Lots To Love",
  type: GeoType.Point,
  description:
    "Vacant lot projects that are implemented, in progress, or just an idea.",
  resourceID: "5598f3a2-0c54-4692-8533-3f2d54086d5c",
  publisher: grounded,
  extent: Extent.County,
  source: {
    title: "WPRDC - Lots to Love",
    url: "https://data.wprdc.org/dataset/lots-to-love",
  },
  tileJSONSource: "https://data.wprdc.org/tiles/lots-to-love",
  color: "#c53b33",
  // sql: "SELECT *, name as map_name, cartodb_id as map_identifier FROM lots_to_love",
};

export default layer;
