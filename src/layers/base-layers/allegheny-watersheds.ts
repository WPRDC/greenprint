import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "ac-watersheds",
  title: "Watershed Boundaries",
  type: GeoType.Polygon,
  description: "Watershed Boundaries in Allegheny County",
  tileJSONSource: "https://data.wprdc.org/tiles/ac-watersheds",
  resourceID: "4b16b8a5-d156-4f53-911d-493a82492244",
  publisher: {
    name: "Allegheny County",
    homepage: "https://www.alleghenycounty.us/",
    org: "allegheny-county",
  },
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Watershed Boundaries",
    url: "https://data.wprdc.org/dataset/allegheny-county-watershed-boundaries",
  },
  color: "13a",
  borderColor: "#13A",
  opacity: 0.3,
  // sql: "SELECT *, fid as map_identifier, descr as map_name FROM wprdc.allegheny_county_watershed_boundaries",
};
export default layer;
