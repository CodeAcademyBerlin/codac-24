import { pageWrapperStyles } from "@/styles/common";
import { ReactNode } from "react";

export default async function UsersdLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={pageWrapperStyles}>{children}</div>;
}
