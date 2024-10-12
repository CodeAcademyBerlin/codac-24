import { pageWrapperStyles } from "@/styles/common";
import { ReactNode } from "react";

export default async function CommunityLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={pageWrapperStyles}>{children}</div>;
}
