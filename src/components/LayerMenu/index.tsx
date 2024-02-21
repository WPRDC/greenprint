"use client";

import { LayerMenuSection } from "./LayerMenuSection";
import { LayerMenuItem } from "./LayerMenuItem";
import layers from "@/layers";
import { useContext, useEffect, useState } from "react";
import { LayerCategory } from "@/types";
import { LayersContext } from "@/components/LayerProvider";

export function LayerMenu() {
  const { selection, onSelectionChange } = useContext(LayersContext);

  useEffect(() => {
    if (onSelectionChange)
      onSelectionChange("interactive")(new Set(["parcel-boundaries"]));
  }, []);

  return (
    <div className=" w-full max-w-xs scroll-pt-1 gap-2 overflow-auto bg-white ">
      {!!selection &&
        !!onSelectionChange &&
        Object.entries(layers).map(([k, v]) => (
          <LayerMenuSection
            key={k}
            title={v.label}
            selection={selection[k as LayerCategory]}
            onSelectionChange={onSelectionChange(k as LayerCategory)}
          >
            {v.layers.map((l) => (
              <LayerMenuItem
                key={l.slug}
                id={l.slug}
                name={l.title}
                geoType={l.type}
                extent={l.extent}
                publisher={l.publisher}
              />
            ))}
          </LayerMenuSection>
        ))}
    </div>
  );
}
