import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { ac } from "@/data/publishers";
import { Extent, GeoType, ColoringMode } from "@/types";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "allegheny-county",
  title: "Allegheny County Border",
  type: GeoType.Polygon,
  description: "Boundary of Allegheny County",
  tileJSONSource: "https://data.wprdc.org/tiles/county-border",
  sourceLayer: "56e47f38-30af-46a5-ac5f-50438e420a4a",
  extent: Extent.County,
  publisher: ac,
  resourceID: "09900a13-ab5d-4e41-94f8-7e4d129e9a4c",
  source: {
    title: "Allegheny County Border",
    url: "https://data.wprdc.org/dataset/allegheny-county-boundary",
  },
  color: "#000",
  borderColor: "#000",
  opacity: 0,
  borderWidth: 4,
  noLegend: true,
};

export default layer;
