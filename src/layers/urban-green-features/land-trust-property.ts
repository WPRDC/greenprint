import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "land-trust-property",
  title: "Land Trust Property",
  type: GeoType.Polygon,
  description: "Properties owned by Land Trusts",
  resourceID: "e6a4f3f0-6308-440a-bddd-9b9612b6cc4e",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Greenways",
    url: "https://data.wprdc.org/dataset/allegheny-county-greenways",
  },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.allegheny_greenways_land_trust_property._geom",
  sourceLayer: "table.allegheny_greenways_land_trust_property._geom",
  color: "#4c7737",
  // sql: "SELECT * FROM greenways_final WHERE type = 'Land Trust Property'",
};

export default layer;
