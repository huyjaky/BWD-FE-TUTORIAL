import { LayoutProps } from "@/models/common";
import Link from "next/link";

export function MainLayout({ children }: LayoutProps) {
  return (
    
    <div className="flex flex-col">
      <h1>Main Layout</h1>
      <Link href={"/"} className="my-[10px]">
        <button className="p-[10px] rounded-xl bg-slate-500 text-white">
          Home
        </button>
      </Link>
      <Link href={"/about"} className="my-[10px]">
        <button className="p-[10px] rounded-xl bg-slate-500 text-white">
          About
        </button>
      </Link>

      <Link href={"/homepage"} className="my-[10px]">
        <button className="p-[10px] rounded-xl bg-slate-500 text-white">
          Homepage
        </button>
      </Link>

      <div>{children}</div>
    </div>
  );
}
