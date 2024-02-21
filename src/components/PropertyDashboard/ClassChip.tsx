import { PropsWithChildren } from "react";

interface ClassChipProps extends PropsWithChildren {
  parcelClass: string;
}

export function ClassChip({ parcelClass, children }: ClassChipProps) {
  let color = "#eee";
  let textColor = "#000";
  switch (parcelClass) {
    case "RESIDENTIAL":
      color = "#facc15";
      break;
    case "COMMERCIAL":
      color = "#f87171";
      break;
    case "INDUSTRIAL":
      color = "#a78bfa";
      break;
    case "AGRICULTURAL":
      color = "#22c55e";
      break;
    case "GOVERNMENT":
      color = "#60a5fa";
      break;
    case "OTHER":
      color = "#BEBEBE";
      break;
    case "UTILITIES":
      color = "#22d3ee";
      break;
  }

  return (
    <div
      className="flex w-fit items-center space-x-1 rounded-md border-2 px-1 py-0.5"
      style={{ background: color, color: textColor, borderColor: textColor }}
    >
      <div className="font-mono text-sm font-bold uppercase">{parcelClass}</div>
    </div>
  );
}
