export async function GET(req: Request) {
  const url = new URL(req.url);
  const bookName = url.searchParams.get("input") as string;
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}:keyes&key=AIzaSyBZkkNRG9eZ96BuXbvdfZD10Ie_ttCZzK0`);
  const book = await res.json();

  return Response.json(book);
} 
