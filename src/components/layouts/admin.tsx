import { LayoutProps } from "@/models/common";
import Link from "next/link";

export function AdminLayout({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <div>Sidebar</div>

      <Link href={"/"}>
        <span>Home</span>
      </Link>
      <Link href={"/about"}>
        <span>About</span>
      </Link>
      <div>{children}</div>


    </div>
  );
}