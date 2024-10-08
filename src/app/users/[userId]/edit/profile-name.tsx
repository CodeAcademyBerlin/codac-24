import { ConfigurationPanel } from "@/components/configuration-panel";
import { ProfileNameForm } from "./profile-name-form";
import { getCurrentUser } from "@/lib/session";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserProfileLoader } from "./page";

export async function ProfileName({ userId }: { userId: string }) {
  return (
    <ConfigurationPanel title="Display Name">
      <Suspense fallback={<Skeleton className="w-full h-[200px] rounded" />}>
        <ProfileNameWrapper userId={userId} />
      </Suspense>
    </ConfigurationPanel>
  );
}

async function ProfileNameWrapper({ userId }: { userId: string }) {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const profile = await getUserProfileLoader(parseInt(userId));

  return <ProfileNameForm userId={userId} profileName={profile.displayName ?? ""} />;
}
