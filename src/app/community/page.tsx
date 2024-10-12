import { Tabs } from '@/components/ui/tabs';

import { assertAuthenticated } from '@/lib/session';
import { roleEnum } from '@/db/schema';
import { getCommunityUseCase } from '@/use-cases/lms';
import { CommunityTable } from './community-table';

export default async function CommunityPage() {

  const user = await assertAuthenticated()
  const community = await getCommunityUseCase()
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        {/* <TabsList>
          {roles.map(role => <TabsTrigger key={role} value={role}>{role}</TabsTrigger>)}

        </TabsList> */}
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
      <CommunityTable cohorts={community} />
      {/* {roles.map(role => <TabsContent value={role} key={role}>
        <UsersProfileTable
          usersProfiles={usersProfiles.filter(userProfile => userProfile.user.role === role || role === "all")}
        />
      </TabsContent>)} */}
    </Tabs>
  );
}
