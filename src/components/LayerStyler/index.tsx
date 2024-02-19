"use client";

import { Key, useEffect, useMemo, useState } from "react";
import { ColoringMode } from "@/types/mapping";
import { ListBoxProps, Selection } from "react-aria-components";
import { BigMenu, BigMenuItem } from "@/components/BigMenu";
import { GeoType } from "@/types";
import { StyleModePicker } from "./StyleModePicker";
import { FieldPicker } from "@/components/LayerStyler/FieldPicker";
import { DataType, Field } from "@/types/model";
import { FillLayoutProps, FillPaintProps } from "maplibre-gl";

export interface LayerStylerProps {}

export function LayerStyler(props: LayerStylerProps) {
  return <div></div>;
}

interface StylerProps {}

export interface LineStylerProps extends StylerProps {}

export interface CircleStylerProps extends StylerProps {}

export interface SymbolStylerProps extends StylerProps {}

export interface FillStylerProps extends StylerProps {
  /** array of fields from which to select to apply fill */
  fields?: Field[];
  selectedField?: Field;
  onChange?: (paint: FillPaintProps, layout: FillLayoutProps) => void;
}

export function FillStyler({ fields }: FillStylerProps) {
  const [styleMode, setStyleMode] = useState<ColoringMode>(ColoringMode.Solid);
  const [fieldKey, setFieldKey] = useState<Field["id"] | undefined>();

  function handleFieldSelection(selection: Key) {
    if (typeof selection === "string") setFieldKey(selection);
    else console.error("Fields must have string ids.");
  }

  // when any of the parameters change, callback with full config
  useEffect(() => {}, [styleMode, fieldKey]);

  return (
    <div>
      {/* select coloring mode */}
      <StyleModePicker
        onSelection={setStyleMode}
        selectedStyleMode={styleMode}
        geoType={GeoType.Polygon}
      />

      {/* pick field */}
      <FieldPicker
        onSelectionChange={handleFieldSelection}
        selectedKey={fieldKey}
        items={fields}
      />
    </div>
  );
}
