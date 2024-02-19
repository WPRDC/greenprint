"use client";

import { Menu, MenuProps } from "react-aria-components";
import React, { ReactNode, useMemo } from "react";
import { className } from "postcss-selector-parser";
import clsx from "clsx";
import { Size } from "@/types";

export interface BigMenuProps extends MenuProps<{ id: string }> {
  title?: ReactNode;
  orientation?: "vertical" | "horizontal" | "grid";
  gridCols?: number;
  size?: Size;
}

export function BigMenu({
  title,
  orientation = "horizontal",
  gridCols = 3,
  size = "M",
  children,
  ...props
}: BigMenuProps) {
  return (
    <Menu
      {...props}
      selectionMode="single"
      className={clsx("py-1", {
        "flex w-full items-center overflow-x-auto":
          orientation === "horizontal",
        "grid ": orientation === "grid",
        "grid-cols-2": gridCols === 2,
        "grid-cols-3": gridCols === 3,
        "grid-cols-4": gridCols === 4,
        "grid-cols-5": gridCols === 5,
        "grid-cols-6": gridCols === 6,
        "grid-cols-7": gridCols === 7,
        "grid-cols-8": gridCols === 8,
        "grid-cols-9": gridCols === 9,
        "grid-cols-10": gridCols === 10,
        "grid-cols-11": gridCols === 11,
        "grid-cols-12": gridCols === 12,
      })}
      disallowEmptySelection
    >
      {Array.isArray(children)
        ? children.map((child) =>
            React.cloneElement(child, { size, key: child.props.id }),
          )
        : children}
    </Menu>
  );
}
