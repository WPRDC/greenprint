import { FieldDef } from "@/types";

export function toFieldLookup<R extends object>(
  fields: FieldDef<R>[],
): Record<keyof R, FieldDef<R>> {
  return fields.reduce(
    (acc, curr) => ({ ...acc, [curr.id]: curr }),
    {} as Record<keyof R, FieldDef<R>>,
  );
}

export function formatDate(date?: string) {
  if (date) return new Date(date).toISOString().substring(0, 10);
  return undefined;
}
