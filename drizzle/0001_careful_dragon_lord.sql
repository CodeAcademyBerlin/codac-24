ALTER TABLE "cohort" DROP CONSTRAINT "cohort_groupId_group_id_fk";
--> statement-breakpoint
ALTER TABLE "cohort" DROP COLUMN IF EXISTS "groupId";