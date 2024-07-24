import "server-only"
import { authOptions } from "./auth"
import { getServerSession } from "next-auth"
import { db } from "./db";
import { chapter } from "./db/schema";
import { eq } from "drizzle-orm";


export async function getMyBooks() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return null;

  const books = await db.query.book.findMany({
    where: (model, { eq }) => eq(model.createdById, userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return books;
}

export async function getMyBooksWithChapter({ bookId }: {
  bookId: string;
}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return null;

  const book = await db.query.book.findFirst({
    where: (model, { eq }) => eq(model.createdById, userId) && eq(model.id, bookId),
    with: {
      chapters: {
        orderBy: (model, { asc }) => asc(model.chapterId)
      }
    }
  });
  return book;
}

export async function updateContent({
  chapterId,
  content,
}: {
  chapterId: string;
  content: string;
}): Promise<void | null> {
  await db.update(chapter)
    .set({ content })
    .where(eq(chapter.id, chapterId))
}
