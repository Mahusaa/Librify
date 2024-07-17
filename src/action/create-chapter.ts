"use server"

import { db } from "~/server/db"
import { chapter } from "~/server/db/schema"
import { sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createChapter(FormData: FormData) {
  const title = FormData.get("chapterTitle") as string
  const createdById = FormData.get("createById") as string
  const bookId = FormData.get("bookId") as string;
  const chapterId = parseInt(FormData.get("chapterId") as string, 10);
  await db.insert(chapter).values({
    id: sql`gen_random_uuid()`,
    title,
    createdById,
    bookId,
    chapterId,
  });
  revalidatePath(`/books/${bookId}`)
}
