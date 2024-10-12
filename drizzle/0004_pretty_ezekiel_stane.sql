ALTER TABLE "student" DROP CONSTRAINT "student_userId_unique";--> statement-breakpoint
ALTER TABLE "cohort" DROP CONSTRAINT "cohort_groupId_group_id_fk";
--> statement-breakpoint
ALTER TABLE "student" DROP CONSTRAINT "student_userId_user_id_fk";
