import {
  LayerOptions,
  QualitativeVisualProps,
  SolidVisualProps,
} from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { trww } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  // visualMode: ColoringMode.Qualitative,
  visualMode: ColoringMode.Solid,
  slug: "3rww-gi-inventory",
  title: "3RWW Green Infrastructure Inventory",
  type: GeoType.Point,
  description: "Inventory of green infrastructure projects compiled by 3RWW.",
  resourceID: "bbe84edd-f737-4e28-b31e-fc7dfa162082",
  publisher: trww,
  extent: Extent.County,
  tileJSONSource: "https://data.wprdc.org/tiles/3rww-gi-inventory",
  sourceLayer: "bbe84edd-f737-4e28-b31e-fc7dfa162082",
  source: {
    title: "WPRDC - 3RWW Green Infrastructure Inventory",
    url: "https://data.wprdc.org/dataset/3rww-green-infrastructure-inventory",
  },
  color: "green",
  // colors: {
  //   field: "ProjectDescription",
  //   categories: {
  //     "Green Wall": { label: "Green Wall", color: "#8dd3c7" },
  //     "Rain Garden / Bioretention": {
  //       label: "Rain Garden / Bioretention",
  //       color: "#ffffb3",
  //     },
  //     "Riparian Buffer / Stream Restoration": {
  //       label: "Riparian Buffer / Stream Restoration",
  //       color: "#bebada",
  //     },
  //     "Porous Pavement": { label: "Porous Pavement", color: "#fb8072" },
  //     "Cistern / Rain Barrel": {
  //       label: "Cistern / Rain Barrel",
  //       color: "#80b1d3",
  //     },
  //     "Stormwater Wetland": { label: "Stormwater Wetland", color: "#fdb462" },
  //     "Green Roof": { label: "Green Roof", color: "#b3de69" },
  //     Bioswale: { label: "Bioswale", color: "#fccde5" },
  //     "Naturalized Meadow": { label: "Naturalized Meadow", color: "#d9d9d9" },
  //     "Stormwater Tree Pit": { label: "Stormwater Tree Pit", color: "#bc80bd" },
  //     "Constructed Wetland": { label: "Constructed Wetland", color: "#ccebc5" },
  //     "Infiltration / Storage Trench": {
  //       label: "Infiltration / Storage Trench",
  //       color: "#ffed6f",
  //     },
  //     "Stormwater Planter": { label: "Stormwater Planter", color: "#72edfb" },
  //     TBD: { label: "TBD", color: "black" },
  //     Other: { label: "Other", color: "gray" },
  //   },
  // },
  popup: {
    fields: [
      { field: "project_name", label: "Project" },
      { field: "project_description", label: "Description" },
    ],
  },
};

export default layer;
