import { Extent, GeoType } from "@/types";
import {
  alleghenyCounty,
  alt,
  growPgh,
  pittsburgh,
  pwsa,
  threeRiverWetWeather,
} from "@/data/publishers";
import { LayerMenuItemProps } from "@/components/LayerMenu/LayerMenuItem";

export const demoLists: Record<string, LayerMenuItemProps[]> = {
  baseLayers: [
    {
      id: 0,
      name: "Parcels",
      geoType: GeoType.Polygon,
      extent: Extent.County,
      publisher: alleghenyCounty,
    },
    {
      id: 1,
      name: "City Neighborhoods",
      geoType: GeoType.Polygon,
      extent: Extent.Pittsburgh,
      publisher: pittsburgh,
    },
    {
      id: 2,
      name: "Combined Sewershed",
      geoType: GeoType.Polygon,
      extent: Extent.Pittsburgh,
      publisher: pwsa,
    },
    {
      id: 3,
      name: "Watershed Boundaries",
      geoType: GeoType.Polygon,
      extent: Extent.County,

      publisher: alleghenyCounty,
    },
    {
      id: 4,
      name: "Allegheny County Border",
      geoType: GeoType.Polygon,
      extent: Extent.County,
      publisher: alleghenyCounty,
    },
  ],
  urbanGreenFeatures: [
    {
      id: 11,
      name: "Food Gardens",
      geoType: GeoType.Point,
      extent: Extent.County,
      publisher: growPgh,
    },
    {
      id: 12,
      name: "3RWW Green Infrastructure Inventory",
      geoType: GeoType.Point,
      extent: Extent.County,
      publisher: threeRiverWetWeather,
    },
  ],
  plannedGreenFeatures: [
    {
      id: 21,
      name: "Original Greenprint",
      geoType: GeoType.Point,
      extent: Extent.County,
      publisher: alt,
    },
    {
      id: 22,
      name: "Green First Plan",
      geoType: GeoType.Point,
      extent: Extent.Pittsburgh,
      publisher: pwsa,
    },
  ],
};
