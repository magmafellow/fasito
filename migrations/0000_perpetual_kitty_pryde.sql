CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" integer NOT NULL,
	"gender" text NOT NULL,
	CONSTRAINT "users_table_gender_unique" UNIQUE("gender")
);
