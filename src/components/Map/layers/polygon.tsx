import { LayerOptions, MapContext, VisualOptions } from "@/types/mapping";
import { Layer } from "react-map-gl/maplibre";
import { darken, generateColorExpression } from "@/components/Map/util";
import { DataDrivenPropertyValueSpecification } from "@maplibre/maplibre-gl-style-spec";
import { FilterSpecification } from "maplibre-gl";

interface SymbolLayerProps {
  layer: LayerOptions<VisualOptions>;
  sourceLayer: string;
  context: MapContext;
}

export function PolygonLayer({
  layer,
  sourceLayer,
  context,
}: SymbolLayerProps) {
  const {
    slug,
    opacity: _opacity,
    borderWidth: _borderWidth,
    borderOpacity: _borderOpacity,
  } = layer;

  const color = generateColorExpression(layer);
  const borderColor = generateColorExpression(layer, darken(20));

  const borderOpacity =
    typeof _borderOpacity === "function"
      ? _borderOpacity(context)
      : _borderOpacity;

  const borderWidth =
    typeof _borderWidth === "function" ? _borderWidth(context) : _borderWidth;

  let opacity: DataDrivenPropertyValueSpecification<number> = 0.7;
  if (_opacity != null) {
    if (typeof _opacity === "function") {
      opacity = _opacity(context);
    } else {
      opacity = _opacity;
    }
  }

  return (
    <>
      <Layer
        type="fill"
        id={`${slug}-fill`}
        source={slug}
        source-layer={sourceLayer}
        paint={{
          "fill-color": color,
          "fill-opacity": opacity ?? 0.7,
        }}
        filter={layer.filter ?? true}
      />
      <Layer
        type="line"
        id={`${slug}-line`}
        source={slug}
        source-layer={sourceLayer}
        paint={{
          "line-color": borderColor,
          "line-opacity": borderOpacity ?? 1,
          "line-width": borderWidth ?? [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            1,
            15,
            1,
            17,
            4,
          ],
        }}
        layout={{
          "line-cap": "round",
        }}
        filter={layer.filter ?? true}
      />
    </>
  );
}
