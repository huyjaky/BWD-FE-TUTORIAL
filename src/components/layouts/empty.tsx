import { LayoutProps } from "@/models";
import Link from "next/link";

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
