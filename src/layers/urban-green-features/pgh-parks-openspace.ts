import { LayerOptions, QualitativeVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { pgh } from "@/data/publishers";

const layer: LayerOptions<QualitativeVisualProps> = {
  visualMode: ColoringMode.Qualitative,
  slug: "pgh-parks-openspace",
  title: "Open Space Plan",
  type: GeoType.Polygon,
  description: "City of Pittsburgh Open Space Plan",
  resourceID: "ce5d35a7-7ce5-42ac-b48f-719813a14870",
  publisher: pgh,
  extent: Extent.Pittsburgh,
  source: { title: "City of Pittsburgh Open Space Plan", url: "" },
  tileJSONSource:
    "https://data.wprdc.org/tiles/table.pgh_opens_space_plan._geom",
  sourceLayer: "table.pgh_opens_space_plan._geom",
  colors: {
    field: "plan",
    categories: {
      divest: { label: "Divest", color: "#8dd3c7" },
      invest: { label: "Invest", color: "#ffffb3" },
      redevelop: { label: "Redevelop", color: "#bebada" },
      expand: { label: "Expand", color: "#fb8072" },
      naturalize: { label: "Naturalize", color: "#80b1d3" },
    },
  },
};

export default layer;
