import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "tax-delinquent",
  title: "Tax Delinquent",
  type: GeoType.Polygon,
  description: "Properties that have been tax delinquent for more than 1 year.",
  resourceID: "ed0d1550-c300-4114-865c-82dc7c23235b",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  source: {
    title: "WPRDC - City of Pittsburgh Property Tax Delinquency",
    url: "https://data.wprdc.org/dataset/city-of-pittsburgh-property-tax-delinquency",
  },
  color: "#0011f5",
  minZoom: 10,
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.tax_delinquent_parcels._geom",
  sourceLayer: "table.tax_delinquent_parcels._geom",
  opacity: ({ hoveredFeatures }) => [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    0,
    0,
    10,
    0.2,
    16.5,
    0.5,
  ],
  borderOpacity: [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    0,
    0,
    12,
    0.1,
    16.5,
    0.7,
  ],
};

export default layer;
