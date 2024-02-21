import { Formatter, PropertyAssessment, Value } from "@/types";
import { ReactNode } from "react";

export function getCookie(name: string): string {
  if (typeof window === "undefined") return "";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length === 2) {
    return parts.pop()?.split(";").shift() || "";
  }
  return "";
}

export const MAX_PLATFORMS = 3;

// template string pass-through function to signal prettier to format strings
export const tw = (strings: ArrayLike<string>, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export function makeAddress(
  data?:
    | PropertyAssessment
    | {
        [key: string]: string;
      },
): [string | undefined, string | undefined] {
  if (!data) return [undefined, undefined];

  let addressLine = [
    data.PROPERTYHOUSENUM,
    data.PROPERTYFRACTION,
    data.PROPERTYADDRESS,
  ].join(" ");
  if (data.PROPERTYUNIT && data.PROPERTYUNIT.trim().length)
    addressLine = addressLine.concat(", ", data.PROPERTYUNIT);

  const cityLine =
    data.PROPERTYCITY && data.PROPERTYSTATE && data.PROPERTYZIP
      ? `${data.PROPERTYCITY}, ${data.PROPERTYSTATE} ${data.PROPERTYZIP}`
      : undefined;
  return [addressLine, cityLine];
}

export function formatValue<T extends Value = Value>(
  value?: T,
  formatter?: Formatter<T>,
  emptyMessage?: ReactNode,
): ReactNode {
  console.log(value);
  if (!value && value !== 0 && value !== false) return emptyMessage;

  if (!formatter) {
    if (typeof value === "boolean") {
      return String(value).charAt(0).toUpperCase() + String(value).slice(1);
    }
    return String(value);
  }
  return formatter(value);
}

export function formatDollars(value?: number) {
  if (!value && value !== 0) return value;
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
