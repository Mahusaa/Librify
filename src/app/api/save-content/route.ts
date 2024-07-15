import { eq } from "drizzle-orm";
import { db } from "~/server/db";
import { chapter } from "~/server/db/schema";
interface RequestBody {
  chapterId: string;
  content: string;
}
export async function POST(req: Request) {
  const { chapterId, content }: RequestBody = await req.json() as RequestBody;
  try {
    await db.update(chapter).set({ content }).where(eq(chapter.id, chapterId))
    console.log("updating..")
  } catch {
    console.log("error updating")

  }
  return new Response("OK");
}
