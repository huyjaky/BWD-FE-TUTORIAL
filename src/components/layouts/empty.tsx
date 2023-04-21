import { LayoutProps } from "@/models/common";
import Link from "next/link";

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
