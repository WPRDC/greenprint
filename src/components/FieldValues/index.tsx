import { FieldRecord, FieldValue, Value } from "@/types";
import { formatValue } from "@/lib/util";
import { Label, Note } from "@/components/Typography";
import React, { isValidElement, ReactElement, ReactNode } from "react";
import { InfoTooltip } from "@/components/Tooltip";
import { twMerge } from "tailwind-merge";

export interface FieldValuesProps<T extends object> {
  label?: string;
  items: (FieldValue | string)[];
  variant?: "dense" | "large" | "default";
  emptyMessage?: ReactNode;
  denseLabel?: boolean;
  fields?: FieldRecord<T>;
  record?: T;
}

export function FieldValues<T extends Record<string, any> = {}>({
  label,
  items,
  variant = "default",
  emptyMessage = "No results found",
  denseLabel = false,
  fields,
  record,
}: FieldValuesProps<T>) {
  const hasStrings = items.some((item) => typeof item === "string");

  // build objects from passed field names
  let fullItems: FieldValue[] = [];
  if (hasStrings && !!fields && !!record) {
    fullItems = items.map((item) =>
      typeof item === "string"
        ? {
            id: item,
            label: fields[item].info?.label,
            value: record[item],
            info: fields[item].info?.notes,
          }
        : item,
    );
  } else if (!hasStrings) {
    fullItems = items as FieldValue[];
  }
  const noValues = fullItems.every((item) => !item.value);

  const formattedItems = fullItems.map((item) => ({
    id: item.id,
    label: item.label,
    info: item.info,
    content: isValidElement<ReactElement>(item.value)
      ? item.value
      : formatValue(
          item.value as Value,
          item.format,
          <Note>not recorded</Note>,
        ),
  }));

  // console.log(formattedItems);

  if (variant === "default")
    return (
      <dl>
        {formattedItems.map(({ id, label, content, info }) => (
          <div
            key={id}
            className={twMerge(
              "pt-4 first-of-type:pt-0",
              denseLabel && "pt-1 even:bg-stone-100",
            )}
          >
            <dt>
              {denseLabel ? (
                <div className="text-sm font-bold">{label}</div>
              ) : (
                <Label>{label}</Label>
              )}
            </dt>
            <dd className="font-mono text-sm">{content}</dd>
          </div>
        ))}
      </dl>
    );
  if (variant === "dense")
    return (
      <>
        {!!label && <Label>{label}</Label>}
        {noValues ? (
          <Note className="text-sm">{emptyMessage}</Note>
        ) : (
          <table className="w-full table-fixed">
            <tbody>
              {formattedItems.map(({ id, label, content, info }) => (
                <tr key={id} className="text-sm even:bg-stone-100">
                  <th className="flex items-start text-left align-top">
                    <div className="">{label}</div>
                    <div>{!!info && <InfoTooltip info={info} />}</div>
                  </th>
                  <td className="font-mono">{content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
}
