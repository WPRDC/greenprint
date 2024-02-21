import { BigMenu, BigMenuButton, BigMenuItem } from "@/components/BigMenu";
import { basemaps } from "@/data/basemaps";
import * as React from "react";
import { BaseMapID } from "@/types";

import { Selection } from "react-aria-components";

export interface BasemapMenuProps {
  onSelection: (basemap: BaseMapID) => void;
  selectedBasemap: BaseMapID;
}

export function BasemapMenu({
  selectedBasemap,
  onSelection,
}: BasemapMenuProps) {
  function handleSelection(selection: Selection) {
    if (selection !== "all" && selection.size) {
      const selected = Array.from(selection)[0];
      if (typeof selected === "string") onSelection(selected as BaseMapID);
    }
  }

  return (
    <BigMenuButton title="Basemaps">
      <BigMenu
        onSelectionChange={handleSelection}
        selectedKeys={[selectedBasemap]}
        orientation="grid"
        size="L"
        gridCols={3}
      >
        {Object.entries(basemaps).map(([name, { label }]) => (
          <BigMenuItem
            key={name}
            image={`/greenprint/basemaps/${name}-close.png`}
            id={name}
          >
            {label}
          </BigMenuItem>
        ))}
      </BigMenu>
    </BigMenuButton>
  );
}
