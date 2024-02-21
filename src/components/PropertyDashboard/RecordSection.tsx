import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface RecordSectionProps {
  children?: ReactNode;
}
export function RecordSection({ children }: RecordSectionProps) {
  return (
    <div className="border-b border-stone-400 pb-3 last:border-b-0 last:pb-0">
      <div>{children}</div>
    </div>
  );
}
