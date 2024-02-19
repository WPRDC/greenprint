import { FieldValue, FormattedValue, Formatter, Value } from "@/types";
import { ReactNode } from "react";
import { formatValue } from "@/lib/util";
import { Label } from "@/components/Typography";

export interface TableProps<T extends Value = Value> {
  label: ReactNode;
  columns: string[];
  rows: string[];
  data: (T | FormattedValue<T>)[][];
  format?: Formatter<T>;
}

export function Table<T extends Value = Value>({
  label,
  columns,
  rows,
  data,
  format,
}: TableProps<T>) {
  // ensure correct dimensions
  if (rows.length !== data.length) return null;
  data.forEach((item) => {
    if (item.length !== columns.length) return null;
  });

  return (
    <div>
      <Label>{label}</Label>
      <table className="table-fixed font-mono text-sm">
        <thead>
          <tr>
            <td></td>
            {columns.map((col) => (
              <th key={col} scope="col" className="border-b-2 border-black">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row} className="even:bg-stone-100">
              <th scope="row" className="truncate text-right">
                {row}
              </th>
              {data[i].map((cell, j) => (
                <Cell<T>
                  value={cell}
                  globalFormat={format}
                  key={`${row}-${columns[j]}`}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Cell<T extends Value>({
  value,
  globalFormat,
}: {
  value: T | FormattedValue<T>;
  globalFormat?: Formatter<T>;
}) {
  let val: T;
  let format;
  if (typeof value === "object") {
    val = value.value;
    format = value.format;
  } else {
    val = value;
    format = globalFormat;
  }
  return (
    <td className=" min-w-[64px] px-3 text-right">
      {formatValue<T>(val, format)}
    </td>
  );
}
