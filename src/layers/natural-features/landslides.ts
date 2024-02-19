import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { nasa } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "landslides",
  title: "Landslides",
  type: GeoType.Point,
  description: "Previously repsorted landslides.",
  resourceID: "f3d639c6-324f-4672-b86c-d42af5002b66",
  publisher: nasa,
  extent: Extent.County,
  source: {
    title: "WPRDC - Landslides",
    url: "https://data.wprdc.org/dataset/landslides",
  },
  tileJSONSource: "https://data.wprdc.org/tiles/landslides",
  color: "black",
  popup: {
    fields: [
      {
        field: "ev_title",
        label: "Title",
        asTitle: true,
        format: (v) => `Landslide: ${v}`,
      },
      { field: "ev_description", label: "Description" },
      { field: "src_name", label: "Reporting Source" },
    ],
  },
  //   needs to be filtered to allegheny county geographically
  //   sql: `
  // SELECT a.*, a.ev_title as map_name, a.cartodb_id as map_identifier
  // FROM wprdc.globallandslides as a, wprdc.allegheny_county_boundary as b
  // WHERE ST_Intersects(a.the_geom, b.the_geom) `,
};

export default layer;
