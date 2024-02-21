import { twMerge } from "tailwind-merge";

interface LabelProps extends React.HTMLProps<HTMLDivElement> {}
export function Label({ children, className }: LabelProps) {
  return (
    <div
      className={twMerge(
        "font-roboto text-xs font-black uppercase text-stone-500",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Note({ children, className }: LabelProps) {
  return (
    <div className={twMerge("text-sm italic text-gray-800", className)}>
      {children}
    </div>
  );
}
