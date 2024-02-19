"use client";
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  Text,
} from "react-aria-components";
import { DataType, Field } from "@/types/model";
import {
  Tb123,
  TbAbc,
  TbCalendar,
  TbChevronDown,
  TbCircleHalf2,
} from "react-icons/tb";
import { ReactNode, useMemo } from "react";
import { ComboBoxProps } from "@react-types/combobox";

export interface FieldPickerProps
  extends Omit<ComboBoxProps<Field>, "children"> {}

export function FieldPicker({ ...props }: FieldPickerProps) {
  return (
    <ComboBox
      selectedKey={props.selectedKey}
      onSelectionChange={props.onSelectionChange}
      menuTrigger="focus"
      className="group flex w-full max-w-xs flex-col gap-1"
    >
      <Label className="cursor-default text-sm font-medium text-black">
        Pick a Field
      </Label>

      <Group className="flex rounded-sm border-2 border-stone-400  bg-white shadow ring-black focus-within:border-black">
        <Input className="w-full flex-1 border-none bg-transparent px-2 py-1 leading-3 outline-none" />
        <Button className="flex items-center border-0 border-l border-solid border-l-stone-400 bg-stone-100 px-1 text-stone-800 transition pressed:bg-sky-200">
          <TbChevronDown />
        </Button>
      </Group>

      <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-sm bg-white text-base shadow-md ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
        <ListBox className="p-1 outline-none" items={props.items}>
          {(item) => (
            <FieldPickerItem textValue={item.name} fieldType={item.type}>
              <span className="truncate">{item.name}</span>
            </FieldPickerItem>
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

export interface FieldPickerItemProps
  extends Omit<ListBoxItemProps, "children"> {
  children: ReactNode;
  fieldType?: DataType;
}

export function FieldPickerItem({
  children,
  fieldType,
  ...props
}: FieldPickerItemProps) {
  const Icon = useMemo(() => {
    switch (fieldType) {
      case DataType.Text:
        return TbAbc;
      case DataType.Number:
        return Tb123;
      case DataType.DateTime:
        return TbCalendar;
      case DataType.Boolean:
        return TbCircleHalf2;
      default:
        return "div";
    }
  }, [fieldType]);

  return (
    <ListBoxItem
      {...props}
      className="group flex cursor-default select-none items-center gap-2 rounded py-1 pl-2 pr-4 text-gray-900 outline-none focus:bg-stone-100 selected:bg-sky-100 focus:selected:bg-stone-100"
    >
      <Icon title={fieldType} className="mr-1.5 text-stone-400" />
      <Text
        slot="label"
        className="flex flex-1 truncate font-normal group-selected:font-medium"
      >
        {children}
      </Text>
    </ListBoxItem>
  );
}
