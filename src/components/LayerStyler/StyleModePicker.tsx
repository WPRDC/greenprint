import { ListBoxProps, Selection } from "react-aria-components";
import { ColoringMode } from "@/types/mapping";
import { GeoType } from "@/types";
import { useMemo, useState } from "react";
import { BigMenu, BigMenuItem } from "@/components/BigMenu";

export interface StyleModePickerProps extends ListBoxProps<object> {
  selectedStyleMode: ColoringMode;
  onSelection: (value: ColoringMode) => void;
  geoType: GeoType;
}

export function StyleModePicker({
  geoType,
  onSelection,
  selectedStyleMode,
  ...props
}: StyleModePickerProps) {
  function handleSelectionChange(keys: Selection) {
    if (typeof keys !== "string")
      onSelection(Array.from(keys)[0] as ColoringMode);
  }

  const colorModeKeys = useMemo(
    () => new Set<ColoringMode>([selectedStyleMode]),
    [selectedStyleMode],
  );

  return (
    <div>
      <div></div>
      <BigMenu
        size="M"
        onSelectionChange={handleSelectionChange}
        selectedKeys={colorModeKeys}
      >
        <BigMenuItem id="solid" image={`/icons/${geoType}_solid.png`}>
          Solid
        </BigMenuItem>
        <BigMenuItem
          id="qualitative"
          image={`/icons/${geoType}_qualitative.png`}
        >
          Qualitative
        </BigMenuItem>
        <BigMenuItem id="sequential" image={`/icons/${geoType}_sequential.png`}>
          Sequential
        </BigMenuItem>
      </BigMenu>
    </div>
  );
}
