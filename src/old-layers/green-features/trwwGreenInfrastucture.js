import { trww } from "../publishers";

export default {
  id: "3rww-gi-inventory",
  type: "vector",
  geoType: "point",
  name: "3RWW Green Infrastructure Inventory",
  legend: {
    display: true,
    type: "single",
    items: [
      "Green Wall",
      "Rain Garden / Bioretention",
      "Riparian Buffer / Stream Restoration",
      "Porous Pavement",
      "Cistern / Rain Barrel",
      "Stormwater Wetland",
      "Green Roof",
      "Bioswale",
      "Naturalized Meadow",
      "Stormwater Tree Pit",
      "Constructed Wetland",
      "Infiltration / Storage Trench",
      "Stormwater Planter",
      "TBD",
      "Other",
    ],
  },
  legendColor: "#0F2",
  legendDisplay: true,
  category: "urban-green-features",
  visible: false,
  popupProperties: [
    { id: "project_name", name: "Project" },
    { id: "project_description", name: "Description" },
  ],
  source: {
    type: "vector",
    minzoom: 10,
    sql: "SELECT *, project_name as map_name, objectid as map_identifier  FROM table_3rww_gi_inventory",
  },
  information: {
    description: "Inventory of green infrastructure projects compiled by 3RWW.",
    extent: "Allegheny County",
    publisher: trww,
    source: {
      title: "WPRDC - 3RWW Green Infrastructure Inventory",
      link: "https://data.wprdc.org/dataset/3rww-green-infrastructure-inventory",
    },
  },
  layers: {
    labels: [],
    style: [
      {
        id: "3rww-gi-inventory-circle",
        type: "circle",
        interactive: true,
        source: "3rww-gi-inventory",
        "source-layer": "3rww-gi-inventory",
        layout: {},
        paint: {
          "circle-radius": {
            stops: [
              [10, 4],
              [15, 8],
            ],
          },
          "circle-color": {
            property: "project_description",
            type: "categorical",
            stops: [
              ["Green Wall", "#8dd3c7"],
              ["Rain Garden / Bioretention", "#ffffb3"],
              ["Riparian Buffer / Stream Restoration", "#bebada"],
              ["Porous Pavement", "#fb8072"],
              ["Cistern / Rain Barrel", "#80b1d3"],
              ["Stormwater Wetland", "#fdb462"],
              ["Green Roof", "#b3de69"],
              ["Bioswale", "#fccde5"],
              ["Naturalized Meadow", "#d9d9d9"],
              ["Stormwater Tree Pit", "#bc80bd"],
              ["Constructed Wetland", "#ccebc5"],
              ["Infiltration / Storage Trench", "#ffed6f"],
              ["Stormwater Planter", "#72edfb"],
              ["rain gaRain Garden / Bioretentionrden", "#ffffb3"],
              ["TBD", "black"],
              ["Other", "gray"],
            ],
          },
          "circle-stroke-width": {
            stops: [
              [10, 1],
              [15, 2],
            ],
          },
          "circle-stroke-color": "#013220",
        },
      },
    ],
  },
};
