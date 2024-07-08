import { cn } from "~/lib/utils";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { getMyBooks } from "~/server/queries";

export default async function BookPage() {
  const books = await getMyBooks();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Book Shelf</h2>
          <p className="text-sm text-muted-foreground">A collection of must-read books.</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book, index) => (
            <Link
              href={`/books/${book.id}`}
              key={index + 1}
              scroll={false}
            >
              <div className={cn("space-y-3")}>
                <div className="overflow-hidden rounded-md shadow-lg">
                  {book.image ? (
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={250}
                      height={330}
                      className={cn(
                        "h-auto w-full object-cover transition-all hover:scale-105",
                        "aspect-[3/4]"
                      )}
                    />
                  ) : (
                    "Book Image"
                  )}
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

