import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "vacant-lots",
  title: "Vacant Lots",
  type: GeoType.Polygon,
  description:
    'Parcels with a "Land Use" description of "Vacant Lot" in Allegheny County\'s Real Estate Assessment data.',
  resourceID: "65855e14-549e-4992-b5be-d629afc676fa",
  tileJSONSource: "https://data.wprdc.org/tiles/table.vacant_parcels._geom",
  sourceLayer: "table.vacant_parcels._geom",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Assessments",
    url: "https://data.wprdc.org/dataset/property-assessments",
  },
  minZoom: 12,
  color: "#800000",
  opacity: ({ hoveredFeatures }) => [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    0,
    0,
    12,
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
