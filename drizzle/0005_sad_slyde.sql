ALTER TABLE "group" DROP CONSTRAINT "group_cohortId_cohort_id_fk";
--> statement-breakpoint
ALTER TABLE "student" ALTER COLUMN "cohortId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "cohort" ADD COLUMN "startDate" timestamp;--> statement-breakpoint
ALTER TABLE "cohort" ADD COLUMN "endDate" timestamp;--> statement-breakpoint
ALTER TABLE "cohort" ADD COLUMN "groupId" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "student" ADD COLUMN "userId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cohort" ADD CONSTRAINT "cohort_groupId_group_id_fk" FOREIGN KEY ("groupId") REFERENCES "public"."group"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "student" ADD CONSTRAINT "student_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "student" ADD CONSTRAINT "student_cohortId_cohort_id_fk" FOREIGN KEY ("cohortId") REFERENCES "public"."cohort"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "cohort" DROP COLUMN IF EXISTS "info";--> statement-breakpoint
ALTER TABLE "group" DROP COLUMN IF EXISTS "cohortId";