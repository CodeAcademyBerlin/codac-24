import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getUsersWithProfileUseCase } from '@/use-cases/users';
import { UsersProfileTable } from './users-profile-table';
import { assertAdmin } from '@/lib/session';
import { roleEnum } from '@/db/schema';

export default async function UsersPage() {

  const user = await assertAdmin()
  const usersProfiles = await getUsersWithProfileUseCase();
  const roles = ["all", ...roleEnum.enumValues]
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          {roles.map(role => <TabsTrigger key={role} value={role}>{role}</TabsTrigger>)}

        </TabsList>
        {/* <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add User
            </span>
          </Button>
        </div> */}
      </div>
      {roles.map(role => <TabsContent value={role} key={role}>
        <UsersProfileTable
          usersProfiles={usersProfiles.filter(userProfile => userProfile.user.role === role || role === "all")}
        />
      </TabsContent>)}
    </Tabs>
  );
}
