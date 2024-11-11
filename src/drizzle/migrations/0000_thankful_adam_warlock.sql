CREATE TABLE IF NOT EXISTS "quotes" (
	"id" uuid DEFAULT gen_random_uuid(),
	"body" text NOT NULL,
	"author" varchar NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
