import { UserRole } from "./user-role";

// export const getUserProfileLoader = cache(getUserProfileUseCase);
export default async function EditUserPage({ params: { userId } }: { params: { userId: string } }) {
  // console.log(profile)
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <UserRole userId={userId} />
      </div>

      {/* <ConfigurationPanel title="Profile Bio">
        <Suspense fallback={<Skeleton className="w-full h-[400px] rounded" />}>
          <BioFormWrapper userId={userId} />
        </Suspense>
      </ConfigurationPanel> */}

      {/* <ConfigurationPanel title="Theme">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <span className="mb-2 sm:mb-0">Toggle dark mode</span>
          <ModeToggle />
        </div>
      </ConfigurationPanel> */}
    </div>
  );
}

// export async function BioFormWrapper({ userId }: { userId: string }) {
//   // const user = await assertAdmin();
//   const profile = await getUserProfileUseCase(parseInt(userId));
//   return <EditBioForm bio={profile.bio} userId={userId} />;
// }
