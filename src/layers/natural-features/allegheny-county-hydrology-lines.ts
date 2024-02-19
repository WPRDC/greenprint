import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "allegheny-county-hydrology-lines",
  title: "Hydrology Lines",
  type: GeoType.Line,
  description:
    "The Hydrology Feature Dataset contains photogrammetrically compiled water drainage features and structures including rivers, streams, drainage canals, locks, dams, lakes, ponds,...",
  resourceID: "083c1400-999f-4409-a1a2-fd27ad5592d5",
  publisher: ac,
  extent: Extent.County,
  tileJSONSource:
    "https://data.wprdc.org/tiles/allegheny-county-hydrology-lines",
  source: {
    title: "WPRDC - Allegheny County Hydrology lines",
    url: "https://data.wprdc.org/dataset/allegheny-county-hydrology-lines",
  },
  color: "navy",
};

export default layer;
