"use client";

import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/use-media-query";
import { Blocks, Circle, PyramidIcon, Box } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLinks({ isAuthenticated }: { isAuthenticated: boolean }) {
  const path = usePathname();
  const { isMobile } = useMediaQuery();
  const isLandingPage = path === "/";

  if (isMobile) return null;

  return (
    <>
      {!isLandingPage && isAuthenticated && (
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant={"link"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/lms"}>
              <Blocks className="w-4 h-4" /> LMS
            </Link>
          </Button>
          <Button
            variant={"link"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/community"}>
              <PyramidIcon className="w-4 h-4" /> Community
            </Link>
          </Button>
          <Button
            variant={"link"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/dashboard"}>
              <Box className="w-4 h-4" /> Dashboard
            </Link>
          </Button>

          <Button
            variant={"link"}
            asChild
            className="flex items-center justify-center gap-2"
          >
            <Link href={"/browse"}>
              <Circle className="w-4 h-4" /> Browse Groups
            </Link>
          </Button>


        </div>
      )}

      {(isLandingPage || !isAuthenticated) && (
        <div className="hidden md:flex gap-4">
          {/* <Button variant={"link"} asChild>
            <Link href="/#features">Features</Link>
          </Button> */}

          {/* <Button variant={"link"} asChild>
            <Link href="/#pricing">Pricing</Link>
          </Button> */}

          <Button variant={"link"} asChild>
            <Link href={"/browse"}>Browse Groups</Link>
          </Button>
        </div>
      )}
    </>
  );
}
