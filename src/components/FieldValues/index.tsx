import { FieldValue, Value } from "@/types";
import { formatValue } from "@/lib/util";
import { Label } from "@/components/Typography";
import { isValidElement, JSXElementConstructor, ReactElement } from "react";

export interface FieldValuesProps {
  items: FieldValue[];
}

export function FieldValues({ items }: FieldValuesProps) {
  return (
    <dl className="mb-4">
      {items.map((item) => (
        <div key={item.id} className="pt-4 first-of-type:pt-0">
          <dt>
            {["string", "number"].includes(typeof item.label) ? (
              <Label>{item.label}</Label>
            ) : (
              item.label
            )}
          </dt>
          <dd className="font-mono">
            {isValidElement<
              ReactElement<any, string | JSXElementConstructor<any>>
            >(item.value)
              ? item.value
              : formatValue(item.value as Value, item.format)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
