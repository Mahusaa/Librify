import "server-only"
import { authOptions } from "./auth"
import { getServerSession } from "next-auth"
import { db } from "./db";


export async function getMyBooks() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) throw new Error("Unauthorized");

  const books = await db.query.book.findMany({
    where: (model, { eq }) => eq(model.createdById, userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return books;
}
