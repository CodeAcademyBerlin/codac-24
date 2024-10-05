"use client";

import { toggleGroupCohortAction } from "@/app/dashboard/groups/[groupId]/settings/actions";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Group } from "@/db/schema";
import { useServerAction } from "zsa-react";

export function GroupCohortSwitch({ group }: { group: Group }) {
  const { toast } = useToast();

  const { execute } = useServerAction(toggleGroupCohortAction, {
    onSuccess() {
      toast({
        title: "Update successful",
        description: "Group cohort updated.",
      });
    },
    onError({ err }) {
      toast({
        title: "Something went wrong",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="flex items-center space-x-2">
      <Switch
        defaultChecked={group.isPublic}
        onCheckedChange={() => {
          execute(group.id);
        }}
        id="cohort"
      />
      <Label htmlFor="cohort">Is Group Cohort</Label>
    </div>
  );
}
