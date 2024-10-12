import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { lms } from "@/app/source";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={lms.pageTree} nav={{ title: "LMS" }}>
      {children}
    </DocsLayout>
  );
}
