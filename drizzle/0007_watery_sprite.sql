ALTER TYPE "role" ADD VALUE 'user';--> statement-breakpoint
ALTER TABLE "student" ALTER COLUMN "cohortId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role" DEFAULT 'user' NOT NULL;--> statement-breakpoint
ALTER TABLE "student" DROP COLUMN IF EXISTS "role";