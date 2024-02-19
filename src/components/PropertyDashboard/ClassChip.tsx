import { PropsWithChildren, useMemo } from "react";

interface ClassChipProps extends PropsWithChildren {
  parcelClass: string;
}

export function ClassChip({ parcelClass, children }: ClassChipProps) {
  let color = "#eee";
  switch (parcelClass) {
    case "RESIDENTIAL":
      color = "#FFFF00";
      break;
    case "COMMERCIAL":
      color = "#FF0000";
      break;
    case "INDUSTRIAL":
      color = "#A002F0";
      break;
    case "AGRICULTURAL":
      color = "#228b22";
      break;
    case "GOVERNMENT":
      color = "#0000FF";
      break;
    case "OTHER":
      color = "#BEBEBE";
      break;
    case "UTILITIES":
      color = "#2F4F4F";
      break;
  }

  return (
    <div
      className="flex w-fit items-center space-x-1 rounded-md border-2 border-stone-700 px-1"
      style={{ background: color }}
    >
      <div className="font-mono text-sm font-semibold uppercase">
        {parcelClass}
      </div>
    </div>
  );
}
