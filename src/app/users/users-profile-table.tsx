// import { GroupCard } from "@/app/dashboard/group-card";
// import { getPublicGroupsByUserIdUseCase } from "@/use-cases/groups";
// import { getUsersUseCase, getUsersWithProfileUseCase } from "@/use-cases/users";
// import Image from "next/image";

// export default async function Users() {
//     // const userGroups = await getPublicGroupsByUserIdUseCase(parseInt(userId));
//     const users = await getUsersWithProfileUseCase();

//     return (
//         <div className="space-y-8">
//             {users.length === 0 && (
//                 <div className="flex flex-col items-center justify-center py-12 gap-8 dark:bg-slate-900 rounded-xl">
//                     <Image
//                         src="/empty-state/mountain.svg"
//                         width="200"
//                         height="200"
//                         alt="no groups placeholder image"
//                         className="w-full max-w-[200px] h-auto"
//                     />
//                     <h2 className="text-2xl text-center px-4">
//                         No users found
//                     </h2>
//                 </div>
//             )}

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//                 {users.map((user) => (
//                     <p key={user.user.email}>{user.profile.displayName}</p>
//                 ))}



//             </div>
//         </div>
//     );
// }
// 'use client';

import {
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    Table
} from '@/components/ui/table';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
// import { Product } from './product';
// import { SelectProduct } from '@/lib/db';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getUsersWithProfileUseCase } from '@/use-cases/users';
import { UsersProfileRow } from './users-profile-row';
import { User, Profile } from '@/db/schema';


export async function UsersProfileTable({ usersProfiles }: { usersProfiles: { user: User, profile: Profile }[] }) {


    return (
        <Card>
            <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>
                    Manage users
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="hidden md:table-cell">Id</TableHead>
                            <TableHead className="hidden md:table-cell">
                                Actions
                            </TableHead>
                            <TableHead className="hidden md:table-cell">Created at</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {usersProfiles.map((userProfile) => (
                            <UsersProfileRow key={userProfile.user.id} user={userProfile.user} profile={userProfile.profile} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <form className="flex items-center w-full justify-between">
                    {/* <div className="text-xs text-muted-foreground">
                        Showing{' '}
                      
                     <div className="flex">
                        <Button
                            formAction={prevPage}
                            variant="ghost"
                            size="sm"
                            type="submit"
                            disabled={offset === productsPerPage}
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Prev
                        </Button>
                        <Button
                            formAction={nextPage}
                            variant="ghost"
                            size="sm"
                            type="submit"
                            disabled={offset + productsPerPage > totalProducts}
                        >
                            Next
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div> */}
                </form>
            </CardFooter>
        </Card>
    );
}