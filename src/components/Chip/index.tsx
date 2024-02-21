import { IconType } from "react-icons/lib/cjs/iconBase";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { InfoTooltip } from "@/components/Tooltip";

export interface ChipProps {
  label: string;
  icon?: IconType;
  variant?: "default" | "active" | "disabled" | "error";
  info?: ReactNode;
  className?: string;
}

export function Chip({
  label,
  icon,
  variant = "default",
  info,
  className,
}: ChipProps) {
  const Icon = icon;
  return (
    <div className={twMerge("flex items-start", className)}>
      <div
        className={twMerge(
          "flex w-fit items-center space-x-1 rounded-md border-2 px-1",
          variant === "default" && "",
          variant === "active" && "border-leafgreen bg-lightgreen/70",
          variant === "disabled" && "text-stone-200",
          variant === "error" && "",
        )}
      >
        {!!Icon && (
          <div>
            <Icon />
          </div>
        )}
        <div className="font-mono text-sm font-semibold uppercase">{label}</div>
      </div>
      {!!info && <InfoTooltip info={info} />}{" "}
    </div>
  );
}
