import { LayerOptions, QualitativeVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<QualitativeVisualProps> = {
  visualMode: ColoringMode.Qualitative,
  slug: "allegheny-land-use-areas",
  title: "Land Use",
  type: GeoType.Polygon,
  description: "Allegheny County land use as ascribed to areas of land.",
  resourceID: "e5f9adda-fd3c-434f-ae7b-429929451c90",
  publisher: ac,
  extent: Extent.County,
  tileJSONSource: "https://data.wprdc.org/tiles/allegheny-land-use-areas",
  source: {
    title: "WPRDC - Allegheny County Land Use Areas",
    url: "https://data.wprdc.org/dataset/allegheny-county-land-use-areas",
  },
  colors: {
    field: "FEATURECOD",
    categories: {
      300: { label: "Uncoded Land Area", color: "blue" },
      310: { label: "Woodland", color: "green" },
      340: { label: "Nursery or Orchard", color: "red" },
      350: { label: "Cultivated Field", color: "purple" },
      620: { label: "Athletic Field", color: "yellow" },
    },
  },
  //   sql: `
  // SELECT *,
  //   CASE
  //   	WHEN featurecod = 300 THEN 'Uncoded Land Area'
  //   	WHEN featurecod = 310 THEN 'Woodland'
  //   	WHEN featurecod = 340 THEN 'Nursery or Orchard'
  //   	WHEN featurecod = 350 THEN 'Cultivated Field'
  //   	WHEN featurecod = 620 THEN 'Athletic Field'
  //       ELSE ''
  //   END as feature
  // FROM wprdc.allegheny_county_land_use_areas`,
};

export default layer;
