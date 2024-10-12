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
import { CohortRow, } from './community-row';
import { User, Profile, Cohort } from '@/db/schema';
import Link from "next/link";


export async function CommunityTable({ cohorts }: { cohorts: Cohort[] }) {



    return (
        <Card>
            <CardHeader>
                <CardTitle>Cohorts</CardTitle>

            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead className="hidden md:table-cell">Id</TableHead>
                            <TableHead>Name</TableHead>


                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cohorts.map((cohort) => (
                            <CohortRow key={cohort.id} cohort={cohort} />

                        ))
                        }

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