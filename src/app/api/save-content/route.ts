import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { sql } from "drizzle-orm";
import { chapter } from "~/server/db/schema";
import { revalidatePath } from "next/cache";

export const revalidate = true;


interface RequestBody {
  chapterId: string;
  content: string;
  bookId: string;
}
export async function POST(req: Request) {
  const { chapterId, content, bookId }: RequestBody = await req.json() as RequestBody;
  const currentTimestamp = new Date();
  const path = `/books/${bookId}`
  await db.update(chapter)
    .set({
      content,
      updatedAt: sql`${currentTimestamp.toISOString()}`
    })
    .where(eq(chapter.id, chapterId))
  revalidatePath(path);
  return Response.json({ revalidatePath: true });
}
