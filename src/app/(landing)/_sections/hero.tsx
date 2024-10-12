import { SignedIn } from "@/components/auth";
import { SignedOut } from "@/components/auth";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CodacLogoTriangle } from "./codac-logo-triangle";

export function HeroSection() {
  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-y-14 w-full justify-between">
          <div className="">
            <Badge className="text-sm md:text-base">
              Code Academy Berlin
            </Badge>
            <h1 className="text-5xl md:text-7xl max-w-3xl mt-10 leading-[1.2] font-semibold">
              Connect, Collaborate, Code.
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-[600px]">
              CODAC is a developer-driven community based in the heart of Berlin. Whether you're a frontend enthusiast, backend specialist, or an AI geek, CODAC brings you together with like-minded professionals, hobbyists, and students for collaboration, networking, and skill growth.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
              <SignedIn>
                <Button asChild variant="outline">
                  <Link href={"/dashboard"}>View Dashboard</Link>
                </Button>
              </SignedIn>

              <SignedOut>
                <Button asChild>
                  <Link href={"/sign-in"}>Create an Account</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
          <CodacLogoTriangle />
        </div>
      </Container>
    </>
  );
}
