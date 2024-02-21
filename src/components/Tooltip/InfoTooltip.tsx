"use client";
import { Button, DialogTrigger, Header } from "react-aria-components";
import { TiInfoLarge as InfoIcon } from "react-icons/ti";
import React, { ReactNode } from "react";
import { Popover } from "./Popover";

export function InfoTooltip({ info }: { info?: ReactNode }) {
  return (
    <DialogTrigger>
      <Button className="text-blue-400 hover:text-blue-600">
        <InfoIcon className="h-3 w-3" />
      </Button>
      <Popover>
        <Header className="mb-1 text-xs font-bold text-gray-500">Info</Header>
        <div>{info}</div>
      </Popover>
    </DialogTrigger>
  );
}
