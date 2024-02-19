import {
  ColoringMode,
  LayerOptions,
  QualitativeVisualProps,
  SolidVisualProps,
} from "@/types";
import { SourceFunctionSpecification } from "@maplibre/maplibre-gl-style-spec";
import tinycolor from "tinycolor2";
import { MapGeoJSONFeature, MapLayerMouseEvent } from "react-map-gl/maplibre";

export function generateSolidColorExpression(
  layer: LayerOptions<SolidVisualProps>,
  styler?: (color: string) => string,
): string {
  if (styler) return styler(layer.color);
  return layer.color;
}

export function generateQualitativeColorExpression(
  layer: LayerOptions<QualitativeVisualProps>,
  styler: (color: string) => string = (c) => c,
): SourceFunctionSpecification<string> {
  return {
    property: layer.colors.field,
    type: "categorical",
    stops: Object.entries(layer.colors.categories).map(([k, v]) => [
      k,
      styler(v.color),
    ]),
  };
}

export function generateColorExpression(
  layer: LayerOptions<SolidVisualProps> | LayerOptions<QualitativeVisualProps>,
  styler?: (color: string) => string,
) {
  if (layer.visualMode === ColoringMode.Solid)
    return generateSolidColorExpression(layer, styler);
  if (layer.visualMode === ColoringMode.Qualitative)
    return generateQualitativeColorExpression(layer, styler);
}

export const darken =
  (amount?: number) =>
  (color: string): string =>
    tinycolor(color).darken(amount).toString();

export const lighten =
  (amount?: number) =>
  (color: string): string =>
    tinycolor(color).lighten(amount).toString();

export function extractFeatures(
  e: MapLayerMouseEvent,
): MapGeoJSONFeature[] | null {
  if (!e.features || !e.features.length) {
    return null;
  }
  const features = e.features.filter(
    (f) => f.properties["PIN"] != "COMMON GROUND",
  );

  // if nothing found in list of features, they must all be COMMON GROUND
  if (!features.length) return [e.features[0]];
  // if only one makes it past the filter, it's a parcel we care about
  if (features.length === 1) return [features[0]];
  // otherwise return the list of non common ground parcels
  return features;
}
