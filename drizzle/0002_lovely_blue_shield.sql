ALTER TABLE "group" ADD COLUMN "type" text DEFAULT 'other' NOT NULL;--> statement-breakpoint
ALTER TABLE "group" DROP COLUMN IF EXISTS "youtubeLink";--> statement-breakpoint
ALTER TABLE "group" DROP COLUMN IF EXISTS "githubLink";--> statement-breakpoint
ALTER TABLE "group" DROP COLUMN IF EXISTS "xLink";