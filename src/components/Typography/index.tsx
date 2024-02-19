interface LabelProps extends React.HTMLProps<HTMLDivElement> {}
export function Label({ children }: LabelProps) {
  return (
    <div className="text-xs font-black uppercase text-stone-500">
      {children}
    </div>
  );
}
