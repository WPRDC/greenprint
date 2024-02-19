import {
  ColoringMode,
  GeoType,
  LayerOptions,
  QualitativeVisualProps,
  VisualOptions,
} from "@/types";
import { ColorSpecification } from "@maplibre/maplibre-gl-style-spec";
import { PiLineSegmentsFill } from "react-icons/pi";
import { darken } from "@/components/Map/util";

export interface LegendProps {
  layers?: LayerOptions<VisualOptions>[];
}

export function Legend({ layers }: LegendProps) {
  return (
    <div className="z-100 flex flex-col rounded-sm border bg-white/65 p-2 backdrop-blur-md">
      <div className="text-xs font-semibold uppercase text-leafgreen">
        Legend
      </div>

      {layers &&
        layers
          .filter((l) => !l.noLegend)
          .map((item) => <LegendItem layer={item} key={item.slug} />)}
    </div>
  );
}

export interface LegendItemProps<P extends VisualOptions = VisualOptions> {
  layer: LayerOptions<P>;
}

export function LegendItem({ layer }: LegendItemProps<VisualOptions>) {
  return (
    <div className="mt-1">
      <div className="pb-1 text-sm font-semibold text-gray-700">
        {layer.title}
      </div>
      {layer.visualMode === ColoringMode.Solid && (
        <LegendRow
          label={layer.title}
          color={layer.color}
          borderColor={layer.borderColor}
          type={layer.type}
        />
      )}
      {layer.visualMode === ColoringMode.Qualitative &&
        Object.entries(layer.colors.categories).map(([k, record]) => (
          <LegendRow key={k} {...record} type={layer.type} />
        ))}
    </div>
  );
}

interface LegendRowProps {
  label: string;
  color?: ColorSpecification;
  borderColor?: ColorSpecification;
  type: GeoType;
}

export function LegendRow({ label, color, borderColor, type }: LegendRowProps) {
  return (
    <div className="flex items-center space-x-2 pb-1">
      {type === GeoType.Polygon && (
        <div
          style={{
            background: color,
            borderColor: borderColor ?? darken(20)(color ?? "black"),
          }}
          className="h-4 w-4 rounded-sm border-2"
        />
      )}

      {type === GeoType.Point && (
        <div
          style={{
            background: color,
            borderColor: borderColor ?? "black",
          }}
          className="h-3 w-3 rounded-full border-2"
        />
      )}

      {type === GeoType.Line && (
        <PiLineSegmentsFill style={{ color: color }} className="h-4 w-4" />
      )}

      <div className="text-xs font-medium">{label}</div>
    </div>
  );
}
