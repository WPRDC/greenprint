import { LayerOptions, MapContext, VisualOptions } from "@/types/mapping";
import { Layer } from "react-map-gl/maplibre";
import { darken, generateColorExpression } from "@/components/Map/util";
import { FilterSpecification } from "maplibre-gl";

interface PointLayerProps {
  layer: LayerOptions<VisualOptions>;
  sourceLayer: string;
  context: MapContext;
}

export function CircleLayer({ layer, sourceLayer }: PointLayerProps) {
  const { slug } = layer;

  const color = generateColorExpression(layer);
  const borderColor = generateColorExpression(layer, darken());

  return (
    <Layer
      type="circle"
      id={`${slug}-circle`}
      source={slug}
      source-layer={sourceLayer}
      paint={{
        "circle-color": color,
        "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 3, 9, 8],
        "circle-stroke-color": borderColor,
        "circle-stroke-width": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          1,
          15,
          2,
        ],
      }}
      layout={{}}
      filter={layer.filter ?? true}
    />
  );
}
