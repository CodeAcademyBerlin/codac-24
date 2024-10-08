"use client";

import { applicationName } from "@/app-config";
import { BrandText } from "@/components/brand/brand-text";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLogo() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <Link
      href={isDashboard ? "/dashboard" : "/"}
      className="flex gap-2 items-center text-xl"
    >
      <Image
        className="rounded w-8 h-8"
        width="50"
        height="50"
        src="/codac-logo.png"
        alt="hero image"
      />
      <BrandText> {applicationName}</BrandText>
    </Link>
  );
}
