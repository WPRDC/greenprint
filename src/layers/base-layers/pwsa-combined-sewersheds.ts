import {
  LayerOptions,
  QualitativeVisualProps,
  SolidVisualProps,
} from "@/types/mapping";
import { Extent, GeoType, ColoringMode } from "@/types";

const layer: LayerOptions<QualitativeVisualProps> = {
  visualMode: ColoringMode.Qualitative,
  slug: "pwsa-combined-sewersheds",
  title: "Combined Sewershed",
  type: GeoType.Polygon,
  description: "Combined sewersheds in the City of Pittsburgh.",
  resourceID: "138d6b65-1630-4905-9421-de90cd9d59e5",
  publisher: {
    name: "Pittsburgh Water & Sewer Authority",
    homepage: "https://pgh2o.com/",
    org: "pwsa",
  },
  extent: Extent.Pittsburgh,
  tileJSONSource: "https://data.wprdc.org/tiles/pwsa-combined-sewersheds",
  source: {
    title: "WPRDC - Combined Sewershed",
    url: "https://data.wprdc.org/dataset/combined-sewershed",
  },
  colors: {
    field: "MOD_BASIN",
    categories: {
      "Upper Mon": { label: "Upper Mon", color: "#e41a1c" },
      Chartiers: { label: "Chartiers", color: "#377eb8" },
      "Saw Mill Run": { label: "Saw Mill Run", color: "#4daf4a" },
      LOGR: { label: "LOGR", color: "#984ea3" },
      "Upper Allegheny": { label: "Upper Allegheny", color: "#ff7f00" },
      "Main Rivers": { label: "Main Rivers", color: "#ffff33" },
    },
  },
  opacity: 0.3,
};

export default layer;
