import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac, pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "flood-zones",
  title: "Flood Zones",
  type: GeoType.Polygon,
  description: "Flood-prone areas in Allegheny County",
  resourceID: "122717f9-f08a-4be1-82b9-c213cc069e8c",
  publisher: pgh,
  extent: Extent.County,
  source: {
    title: "WPRDC - FEMA Flood Zones",
    url: "https://data.wprdc.org/dataset/2014-fema-flood-zones",
  },
  tileJSONSource: "https://data.wprdc.org/tiles/flood-zones",
  color: "#007791",
  // sql: "SELECT * FROM wprdc.s_fld_haz_ar WHERE fld_zone LIKE 'A%'",
};

export default layer;
