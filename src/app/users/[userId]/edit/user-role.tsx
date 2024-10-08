import { ConfigurationPanel } from "@/components/configuration-panel";
import { ProfileNameForm } from "./profile-name-form";
import { getCurrentUser } from "@/lib/session";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getUserProfileLoader } from "./page";
import { getUser, getUsers } from "@/data-access/users";
import { UserRoleForm } from "./user-role-form";


export async function UserRole({ userId }: { userId: string }) {
  return (
    <ConfigurationPanel title="User">
      <Suspense fallback={<Skeleton className="w-full h-[200px] rounded" />}>
        <UserRoleWrapper userId={userId} />
      </Suspense>
    </ConfigurationPanel>
  );
}

async function UserRoleWrapper({ userId }: { userId: string }) {
  const user = await getUser(parseInt(userId));

  if (!user) {
    return null;
  }


  return <UserRoleForm user={user} />;
}
