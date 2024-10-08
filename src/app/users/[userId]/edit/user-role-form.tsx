"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoaderButton } from "@/components/loader-button";
import { useToast } from "@/components/ui/use-toast";
import { updateProfileNameAction, updateRoleAction } from "./actions";
import { useServerAction } from "zsa-react";
import { use } from "react";
import { roleEnum, User } from "@/db/schema";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

const updateRoleActionSchema = z.object({
  role: z.enum(roleEnum.enumValues),
  userId: z.string().min(1),
});

export function UserRoleForm({ user }: { user: User }) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof updateRoleActionSchema>>({
    resolver: zodResolver(updateRoleActionSchema),
    defaultValues: {
      role: user.role,
      userId: user.id.toString(),
    },
  });

  const { execute: updateRole, isPending } = useServerAction(
    updateRoleAction,
    {
      onSuccess: () => {
        toast({
          title: "User Role Updated",
          description: "User role updated successfully.",
        });
        form.reset();
      },
      onError: ({ err }) => {
        toast({
          title: "Error",
          description: err.message || "Failed to update user role.",
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit: SubmitHandler<z.infer<typeof updateRoleActionSchema>> = (
    values
  ) => {
    updateRole(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex gap-2 flex-1"
      >
        <FormField
          control={form.control}
          name="role"
          render={({ field, }) => (
            <FormItem className="flex-1">
              <FormLabel>Role</FormLabel>
              <FormControl>

                <Select defaultValue={user.role} {...field}>
                  <SelectTrigger />
                  <SelectContent>

                    <SelectGroup>
                      {roleEnum.enumValues.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}

                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* <Input {...field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton isLoading={isPending}>Save</LoaderButton>
      </form>
    </Form>
  );
}
