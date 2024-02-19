import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "allegheny-county-hydrology-areas",
  title: "Hydrology Areas",
  type: GeoType.Polygon,
  tileJSONSource:
    "https://data.wprdc.org/tiles/allegheny-county-hydrology-areas",
  description:
    "The Hydrology Feature Dataset contains photogrammetrically compiled water drainage features and structures including rivers, streams, drainage canals, locks, dams, lakes, ponds,...",
  resourceID: "74aebbef-0df1-441b-9b4b-54cf7c38f567",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Hydrology Areas",
    url: "https://data.wprdc.org/dataset/allegheny-county-hydrology-areas",
  },
  color: "#89CFF0",
};

export default layer;
