import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "neighborhood-boundaries",
  title: "Pittsburgh Neighborhoods",
  type: GeoType.Polygon,
  description: "",
  extent: Extent.Pittsburgh,
  publisher: pgh,
  tileJSONSource: "https://data.wprdc.org/tiles/neighborhood-boundaries",
  source: {
    title: "City of Pittsburgh Neighborhoods",
    url: "https://data.wprdc.org/dataset/neighborhoods2",
  },
  resourceID: "4af8e160-57e9-4ebf-a501-76ca1b42fc99",
  interactive: true,
  color: "#000",
  opacity: 0,
  noLegend: true,

  // sql: "SELECT *, hood as map_identifier, hood as map_name FROM pittsburgh_neighborhoods WHERE hood NOT LIKE 'Mount Oliver Borough'",
};

export default layer;
