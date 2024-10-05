import { GroupCard } from "@/app/dashboard/group-card";
import { getPublicGroupsByUserIdUseCase } from "@/use-cases/groups";
import { getUsersUseCase, getUsersWithProfileUseCase } from "@/use-cases/users";
import Image from "next/image";

export default async function Users() {
    // const userGroups = await getPublicGroupsByUserIdUseCase(parseInt(userId));
    const users = await getUsersWithProfileUseCase();

    return (
        <div className="space-y-8">
            {users.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 gap-8 dark:bg-slate-900 rounded-xl">
                    <Image
                        src="/empty-state/mountain.svg"
                        width="200"
                        height="200"
                        alt="no groups placeholder image"
                        className="w-full max-w-[200px] h-auto"
                    />
                    <h2 className="text-2xl text-center px-4">
                        No users found
                    </h2>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {users.map((user) => (
                    <p key={user.user.email}>{user.profile.displayName}</p>
                ))}



            </div>
        </div>
    );
}
