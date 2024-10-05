import { ComingSoon } from "@/app/(coming-soon)/coming-soon";
import { DemoSection } from "@/app/(landing)/_sections/demo";
import { FaqSection } from "@/app/(landing)/_sections/faq";
import { FeaturesSection } from "@/app/(landing)/_sections/features";
import { HeroSection } from "@/app/(landing)/_sections/hero";
import { NewsletterSection } from "@/app/(landing)/_sections/newsletter";
import { PricingSection } from "@/app/(landing)/_sections/pricing";
import { TestimonalsSection } from "@/app/(landing)/_sections/testimonals";
import { TheProblemSection } from "@/app/(landing)/_sections/the-problem";

import { appConfig } from "@/app-config";
import { getUserPlanUseCase } from "@/use-cases/subscriptions";
import { getCurrentUser } from "@/lib/session";
import { CodacLogoTriangle } from "./_sections/codac-logo-triangle";
import { LandingGraphics } from "./_sections/landing-graphics";

export default async function Home() {
  if (appConfig.mode === "comingSoon") {
    return <ComingSoon />;
  }

  if (appConfig.mode === "maintenance") {
    return (
      <div>
        <h1>Maintenance</h1>
      </div>
    );
  }

  if (appConfig.mode === "live") {
    const user = await getCurrentUser();


    return (
      <div>
        <HeroSection />
      </div>
    );
  }
}
