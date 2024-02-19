import { LayerOptions, QualitativeVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { bikepgh } from "@/data/publishers";

const colors = ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e"];

// todo: handle these query-sourced sources
//  allow function query on martin

const layer: LayerOptions<QualitativeVisualProps> = {
  visualMode: ColoringMode.Qualitative,
  slug: "all-bike-lanes",
  title: "Bike Lanes",
  type: GeoType.Line,
  description: "Bike Lanes",
  resourceID: "841de570-9de1-4568-87a1-f52dfb1b7622",
  publisher: bikepgh,
  extent: Extent.County,
  source: {
    title: "WPRDC - BikePGH's Pittsburgh Bike Map Geographic Data",
    url: "https://data.wprdc.org/dataset/shape-files-for-bikepgh-s-pittsburgh-bike-map",
  },
  colors: {
    field: "type",
    categories: {
      on_street_bike_route: { label: "On-street Route", color: colors[0] },
      cautionary_bike_route: { label: "Cautionary Route", color: colors[1] },
      sharrows: { label: "Sharrow", color: colors[2] },
      bike_lanes: { label: "Protected Bike Lane", color: colors[3] },
      protected_bike_lane: { label: "Bike Lane", color: colors[4] },
    },
  },
};

export default layer;
