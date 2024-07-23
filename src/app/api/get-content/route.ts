import { db } from "~/server/db";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id")!;
  const res = await db.query.chapter.findFirst({
    where: (model, { eq }) => eq(model.id, id)
  })

  return Response.json(res);
}
