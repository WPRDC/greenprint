"use client";

import { GridList, Header } from "react-aria-components";
import { ReactNode } from "react";
import { LayerMenuItemProps } from "./LayerMenuItem";
import { Selection } from "react-aria-components";

export interface SectionProps<T extends LayerMenuItemProps> {
  title?: ReactNode;
  items?: Iterable<T>;
  children?: ReactNode | ((values: T) => ReactNode);
  selection?: Selection;
  onSelectionChange?: (selection: Selection) => any;
}

export function LayerMenuSection<T extends LayerMenuItemProps>({
  title,
  children,
  items,
  selection,
  onSelectionChange,
}: SectionProps<T>) {
  return (
    <div>
      <Header className="sticky top-0 bg-white px-2 pb-0.5 pt-2 font-semibold uppercase text-gray-500">
        {title}
      </Header>
      <GridList
        aria-label="layer select"
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
        selectedKeys={selection}
        className="my-1 w-full"
        items={items}
      >
        {children}
      </GridList>
    </div>
  );
}
