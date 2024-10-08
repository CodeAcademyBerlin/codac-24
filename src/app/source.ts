import { map } from "@/../.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/lms",
  rootDir: "docs",
  source: createMDXSource(map),
});
