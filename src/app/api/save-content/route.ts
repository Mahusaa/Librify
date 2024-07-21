import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { sql } from "drizzle-orm";
import { chapter } from "~/server/db/schema";



interface RequestBody {
  chapterId: string;
  content: string;
  bookId: string;
}
export async function POST(req: Request) {
  const { chapterId, content, }: RequestBody = await req.json() as RequestBody;
  const currentTimestamp = new Date();
  if (!content) return Response.json({ failed: "fail" });
  console.log(chapterId)
  await db.update(chapter)
    .set({
      content,
      updatedAt: sql`${currentTimestamp.toISOString()}`
    })
    .where(eq(chapter.id, chapterId))
  return Response.json({ revalidatePath: true });
}
