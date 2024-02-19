import { LayerOptions, QualitativeVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";

const layer: LayerOptions<QualitativeVisualProps> = {
  visualMode: ColoringMode.Qualitative,
  slug: "pwsa-gi-concept",
  title: "Green First Plan",
  type: GeoType.Polygon,
  description:
    "Identifies opportunity sites throughout various sewersheds for stormwater infrastructure that could fulfill both stormwater management needs and support healthy communities and neighborhoods.",
  resourceID: "fdb9f4c1-b9ce-4361-812d-9c9fa7e740d7",
  publisher: {
    name: "Pittsburgh Water & Sewer Authority",
    homepage: "https://pgh2o.com/",
    org: "pwsa",
  },
  extent: Extent.Pittsburgh,
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.pwsa_green_first_plan._geom",
  sourceLayer: "table.pwsa_green_first_plan._geom",
  source: {
    title: "WPRDC - A42-M29-M16 Green Infrastructure Concept",
    url: "https://data.wprdc.org/dataset/a42-m29-m16-gi-concept",
  },
  colors: {
    field: "type",
    categories: {
      "p-detention": { label: "Detention", color: "blue" },
      "p-bioswale": { label: "Bioswale", color: "green" },
      "p-pervious": { label: "Pervious", color: "Red" },
      "p-retention": { label: "Retention", color: "navy" },
    },
  },
  //   sql: `
  //   SELECT 'cwa42m29m16' as grp, layer as type,  cartodb_id, the_geom, the_geom_webmercator
  // FROM wprdc.cwa42m29m16giconcept
  // UNION
  //
  // SELECT 'cwa41o27m19' as grp,
  // CASE
  //  WHEN bmp = 'Major Storage' THEN 'p-retention'
  //  WHEN bmp = 'Distributed Storage' THEN 'p-detention'
  //  ELSE 'other'
  // END AS type,
  //
  // (cartodb_id + 2000) as cartodb_id, the_geom, the_geom_webmercator
  // FROM wprdc.cwa41o27m19giconcept
  //   `,
};

export default layer;
