"use server";

import { adminAction } from "@/lib/safe-action";
import {
  updateProfileBioUseCase,
  updateProfileNameUseCase,
  updateRoleUseCase,
} from "@/use-cases/users";
import { z } from "zod";
import { updateProfileImageUseCase } from "@/use-cases/users";
import { revalidatePath } from "next/cache";
import { rateLimitByKey } from "@/lib/limiter";
import sanitizeHtml from "sanitize-html";
import { roleEnum } from "@/db/schema";

export const updateProfileImageAction = adminAction
  .createServerAction()
  .input(
    z.object({
      fileWrapper: z.instanceof(FormData),
      userId: z.string(),
    })
  )
  .handler(async ({ input, ctx }) => {
    await rateLimitByKey({
      key: `update-profile-image-${ctx.user.id}`,
      limit: 3,
      window: 60000,
    });
    const file = input.fileWrapper.get("file") as File;
    await updateProfileImageUseCase(file, parseInt(input.userId));
    revalidatePath(`/users/${input.userId}/edit`);
  });

export const updateProfileNameAction = adminAction
  .createServerAction()
  .input(
    z.object({
      profileName: z.string(),
      userId: z.string(),
    })
  )
  .handler(async ({ input }) => {
    await updateProfileNameUseCase(parseInt(input.userId), input.profileName);
    revalidatePath(`/users/${input.userId}/edit`);
  });

export const updateRoleAction = adminAction
  .createServerAction()
  .input(
    z.object({
      role: z.enum(roleEnum.enumValues),
      userId: z.string(),
    })
  )
  .handler(async ({ input }) => {
    await updateRoleUseCase(parseInt(input.userId), input.role);
    revalidatePath(`/users/${input.userId}/edit`);
  });

export const updateProfileBioAction = adminAction
  .createServerAction()
  .input(
    z.object({
      bio: z.string(),
      userId: z.string(),
    })
  )
  .handler(async ({ input, ctx }) => {
    await updateProfileBioUseCase(parseInt(input.userId), sanitizeHtml(input.bio));
    revalidatePath(`/users/${input.userId}/edit`);
  });
