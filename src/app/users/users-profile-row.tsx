import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';

import { Profile, User } from '@/db/schema';

export async function UsersProfileRow({ user, profile }: { user: User, profile: Profile }) {
    return (
        <TableRow>
            <TableCell className="hidden sm:table-cell">
                <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={profile.image ?? "/codac-logo.png"}
                    width="64"
                />
            </TableCell>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell>
                {/* <Badge variant="outline" className="capitalize">
                    {user.status}
                </Badge> */}
            </TableCell>
            <TableCell className="hidden md:table-cell">{user.id}</TableCell>
            <TableCell className="hidden md:table-cell">{profile.displayName}</TableCell>
            {/*   <TableCell className="hidden md:table-cell">
                {user.availableAt.toLocaleDateString("en-US")}
            </TableCell> */}
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                            {/* <form action={deleteProduct}>
                                <button type="submit">Delete</button>
                            </form> */}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}