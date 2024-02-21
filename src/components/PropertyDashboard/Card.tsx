import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "@/components/Typography";

export function Card(
  props: PropsWithChildren<
    React.HTMLProps<
      HTMLDivElement & {
        label?: string;
      }
    >
  >,
) {
  return (
    <section
      className={twMerge(
        "mx-2 my-2 rounded bg-white p-2 shadow-sm",
        props.className,
      )}
    >
      {!!props.label && <Label>{props.label}</Label>}
      <div>{props.children}</div>
    </section>
  );
}
