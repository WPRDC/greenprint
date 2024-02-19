import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "allegheny-parks",
  title: "County Parks",
  type: GeoType.Polygon,
  description: "Parks managed by Allegheny County",
  resourceID: "69b65369-05f5-44b1-a6c4-2a16e109d1f6",
  publisher: ac,
  extent: Extent.County,
  tileJSONSource: "https://data.wprdc.org/tiles/allegheny-parks",
  source: {
    title: "WPRDC - Allegheny County Parks",
    url: "https://data.wprdc.org/dataset/allegheny-county-parks-outlines",
  },
  color: "#00441b",
};

export default layer;
