import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { alt } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "greenprint",
  title: "Original Greenprint",
  type: GeoType.Polygon,
  description: "Original ALT Greenprint Plan",
  resourceID: "9d52e332-d516-4f75-98ae-b04a77e3a521",
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.original_greenprint._geom",
  sourceLayer: "table.original_greenprint._geom",
  source: { title: "", url: "" },
  publisher: alt,
  extent: Extent.County,
  color: "#a5ffb9",
};

export default layer;
