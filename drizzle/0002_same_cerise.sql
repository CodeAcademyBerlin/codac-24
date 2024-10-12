ALTER TABLE "cohort" ADD COLUMN "groupId" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cohort" ADD CONSTRAINT "cohort_groupId_group_id_fk" FOREIGN KEY ("groupId") REFERENCES "public"."group"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
