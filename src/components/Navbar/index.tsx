import Image from "next/image";
import { BigMenu } from "../BigMenu";

export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <header className="flex items-end border-b-2 border-black px-7 pb-8">
      <Image
        src="/logo_alone.png"
        alt="Greenprint logo"
        width={90.42}
        height={128}
      />
      <div className="">
        <div className="font-roboto mb-1 text-[2.4rem] uppercase text-leafgreen">
          Greenprint
        </div>
        <div className="font-roboto pb-3.5 text-[0.8rem] font-bold uppercase text-lightgreen">
          A Project of Allegheny Land Trust and The Western Pennsylvania
          Regional Data Center
        </div>
      </div>
    </header>
  );
}
