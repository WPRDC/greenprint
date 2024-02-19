import { Button, MenuTrigger, Popover } from "react-aria-components";
import { TbMap } from "react-icons/tb";
import React, { ReactNode } from "react";
import { PopoverProps } from "@react-types/overlays";

export interface BigMenuButtonProps {
  title?: ReactNode;
  children: PopoverProps["children"];
}
export function BigMenuButton({ title, children }: BigMenuButtonProps) {
  return (
    <MenuTrigger>
      <Button
        aria-label="Menu"
        className="flex items-center rounded-md border-2 border-blue-900 bg-white px-1 py-0.5 font-sans font-semibold shadow-sm hover:bg-slate-100"
      >
        <TbMap className="mr-1 text-lg" />
        <div>{title}</div>
      </Button>
      <Popover
        placement="bottom right"
        className="rounded-sm bg-white p-2 shadow"
      >
        {children}
      </Popover>
    </MenuTrigger>
  );
}
