"use client";
import { codacFontClass } from "@/components/brand/codac-font";
import React from "react";



interface Props {
  children: React.ReactNode;
}

export function BrandLogo({ children }: Props) {
  return (
    <div
      className={`flex-auto ${codacFontClass} text-primary animate-[neonLight_2s_infinite_alternate-reverse] text-8xl lg:text-9xl`}
    >
      {children}
    </div>
  );
}
