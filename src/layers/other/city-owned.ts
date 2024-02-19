import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "city-owned",
  title: "City Owned Properties",
  type: GeoType.Polygon,
  description: "Properties owned by the City of Pittsburgh",
  resourceID: "e1dcee82-9179-4306-8167-5891915b62a7",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/table.city_owned_parcels._geom",
  sourceLayer: "table.city_owned_parcels._geom",
  source: {
    title: "WPRDC - City-Owned Property",
    url: "https://data.wprdc.org/dataset/city-owned-property",
  },
  opacity: 0,
  color: "#BF00FF",
  borderColor: "#BF00FF",
  //   sql: `SELECT pb.the_geom, pb.the_geom_webmercator, copp.cartodb_id as map_identifier, copp.pin as map_name
  // FROM wprdc.table_4ff5eb17_e2ad_4818_97c4_8f91fc6b6396 as copp JOIN
  // allegheny_county_parcel_boundaries as pb
  // ON copp.pin = pb.pin`,
};

export default layer;
