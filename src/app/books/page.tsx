import { cn } from "~/lib/utils";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { getMyBooks } from "~/server/queries";
import { Button } from "~/components/ui/button";
import { CirclePlus } from "lucide-react";
import NewBookDialog from "~/components/books/NewBookDialog";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { ScrollArea } from "~/components/ui/scroll-area";

export default async function BookPage() {
  const books = await getMyBooks();
  const session = await getServerSession(authOptions);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Book Shelf</h2>
          <p className="text-sm text-muted-foreground">A collection of must-read books.</p>
        </div>
        <NewBookDialog createById={session?.user.id}>
          <Button>
            <CirclePlus className="w-4 h-4 mr-2" />
            Add Book
          </Button>
        </NewBookDialog>
      </div>
      <Separator className="mb-6" />
      <div className="space-y-6">
        <ScrollArea className="h-screen">
          {books?.map((book, index) => (
            <Link href={`/books/${book.id}`} key={index + 1} scroll={false}>
              <div className={cn("flex bg-white shadow-md hover:shadow-xl transition-shadow mb-6  rounded-md mr-4")} style={{ height: "150px" }}>
                <div className="flex-shrink-0 overflow-hidden rounded-md mx-4" style={{ width: "100px", height: "135px" }}>
                  {book.imageUrl ? (
                    <Image
                      src={book.imageUrl}
                      alt={book.title}
                      width={100}
                      height={135}
                      className={cn("h-auto w-full ")}
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center text-center text-sm text-gray-600">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between p-4 " style={{ width: "calc(100% - 150px)" }}>
                  <div>
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                    <p className="text-xs text-gray-500">{book.year}</p>
                  </div>
                  <div>
                    <p className="text-sm">
                      {book.description?.substring(0, 200) ?? "Please add your content here. Keep it short and simple. And smile :)"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
