import { LayerOptions, SolidVisualProps } from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";
import { ac } from "@/data/publishers";

const layer: LayerOptions<SolidVisualProps> = {
  visualMode: ColoringMode.Solid,
  slug: "allegheny-county-environmental-justice-areas",
  title: "Environmental Justice Areas",
  type: GeoType.Polygon,
  description:
    "The Health Department defines an environmental justice area as any census tract where at least 20 percent of the population lives in poverty, and/or 30 percent or more of the population is minority.",
  resourceID: "86d92434-8f27-4981-b5ab-90bc0a7c0f79",
  publisher: ac,
  extent: Extent.County,
  source: {
    title: "WPRDC - Allegheny County Environmental Justice Areas",
    url: "https://data.wprdc.org/dataset/environmental-justice-census-tracts",
  },
  color: "#e38633",
  filter: ["==", "EJ_Area", "1"],
};

export default layer;
