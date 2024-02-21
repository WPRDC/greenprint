import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "parcel-boundaries",
  title: "Parcels",
  type: GeoType.Polygon,
  description: "",
  tileJSONSource: "https://data.wprdc.org/tiles/table.greenprint_parcels._geom",
  extent: Extent.County,
  publisher: ac,
  source: {
    title: "Allegheny County Parcel Boundaries",
    url: "https://data.wprdc.org/dataset/allegheny-county-parcel-boundaries1",
  },
  sourceLayer: "table.greenprint_parcels._geom",
  resourceID: "3f50d47a-ab54-4da2-9f03-8519006e9fc9",
  minZoom: 15,
  interactive: true,
  color: "#000",
  selectedColor: "#7BC24EFF",
  opacity: ({ hoveredFeatures, selectedParcel }) => [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    0,
    0,
    15,
    0,
    15.5,
    [
      "case",
      ["==", ["get", "PIN"], selectedParcel ?? ""],
      0.7,
      [
        "case",
        ["!=", ["get", "PIN"], "COMMON GROUND"],
        [
          "case",
          [
            "==",
            ["get", "PIN"],
            !!hoveredFeatures && hoveredFeatures[0].properties["PIN"],
          ],
          0.5,
          0.1,
        ],
        0.1,
      ],
    ],
    16.5,
    [
      "case",
      ["==", ["get", "PIN"], selectedParcel ?? ""],
      0.85,
      [
        "case",
        ["!=", ["get", "PIN"], "COMMON GROUND"],
        [
          "case",
          [
            "==",
            ["get", "PIN"],
            (!!hoveredFeatures && hoveredFeatures[0].properties["PIN"]) ?? "",
          ],
          0.6,
          0.2,
        ],
        0.2,
      ],
    ],
  ],
  borderOpacity: [
    "interpolate",
    ["exponential", 0.5],
    ["zoom"],
    0,
    0,
    15,
    0.0,
    15.5,
    0.1,
    16.5,
    0.7,
  ],
};

export default layer;
