import { LayerOptions, MapContext, VisualOptions } from "@/types/mapping";
import { Layer } from "react-map-gl/maplibre";
import { generateColorExpression } from "@/components/Map/util";
import { FilterSpecification } from "maplibre-gl";

interface SymbolLayerProps {
  layer: LayerOptions<VisualOptions>;
  sourceLayer: string;
  context: MapContext;
}

export function LineLayer({ layer, sourceLayer, context }: SymbolLayerProps) {
  const { slug } = layer;

  const color = generateColorExpression(layer);

  const borderWidth =
    typeof layer.borderWidth === "function"
      ? layer.borderWidth(context)
      : layer.borderWidth;

  return (
    <Layer
      type="line"
      id={`${slug}-line`}
      source={slug}
      source-layer={sourceLayer}
      paint={{
        "line-color": color,
        "line-width": borderWidth ?? [
          "interpolate",
          ["linear"],
          ["zoom"],
          5,
          0.5,
          12,
          1,
          14,
          7,
        ],
      }}
      layout={{}}
      filter={layer.filter ?? true}
    />
  );
}
