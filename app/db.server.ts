import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { articles } from "./schema";
import { eq } from "drizzle-orm";

const client = createClient({
  url: process.env.DATABASE_URL!,
});

export const db = drizzle(client);

async function runMigrate() {
    await migrate(db, { migrationsFolder: "./migrations" });
}

export async function getArticleBySlug(slug: string) {
  return db.select().from(articles).where(eq(articles.slug, slug)).get();
}

export async function getAllArticles() {
    return db.select().from(articles).all();
}

export const migrate = runMigrate
