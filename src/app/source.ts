import { map } from "@/../.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";



export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(map),
});


export const lms = loader({
  baseUrl: "/lms",
  rootDir: "lms",
  source: createMDXSource(map),
});


