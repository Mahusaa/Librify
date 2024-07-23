"use server"

import { db } from "~/server/db"
import { book } from "~/server/db/schema"
import { sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createBook(FormData: FormData) {
  const createdById = FormData.get("createById") as string;
  const title = FormData.get("bookTitle") as string;
  const imageUrl = FormData.get("bookImageUrl") as string;
  const year = parseInt(FormData.get("bookYear") as string, 10)
  const author = FormData.get("bookAuthor") as string;
  const description = FormData.get("bookDesc") as string;
  const currentTimestamp = new Date();
  await db.insert(book).values({
    id: sql`gen_random_uuid()`,
    imageUrl,
    year,
    author,
    description,
    title,
    createdById,
    createdAt: sql`${currentTimestamp.toISOString()}`,
  });
  revalidatePath("/books")
}
