CREATE TABLE IF NOT EXISTS "cohort" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"aka" text,
	"description" text NOT NULL,
	"info" text DEFAULT ''
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "student" (
	"id" serial PRIMARY KEY NOT NULL,
	"cohortId" serial NOT NULL,
	"role" "role" DEFAULT 'member'
);
--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "cohortId" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "youtubeLink" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "githubLink" text DEFAULT '';--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "xLink" text DEFAULT '';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group" ADD CONSTRAINT "group_cohortId_cohort_id_fk" FOREIGN KEY ("cohortId") REFERENCES "public"."cohort"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
