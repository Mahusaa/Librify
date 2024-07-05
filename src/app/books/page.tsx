
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import BookDialog from "~/components/books/BookDialog";
import Link from "next/link";



export default async function BookPage() {
  const albumsData = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      cover:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover:
        "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      cover:
        "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover:
        "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    },  // Add more albums as needed
  ];

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
          {[...albumsData, ...albumsData].map((book) => (
            <Link href="/2">
              <div key={book.name} className={cn("space-y-3")}>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <Image
                    src={book.cover}
                    alt={book.artist}
                    width={250}
                    height={330}
                    className={cn(
                      "h-auto w-full object-cover transition-all hover:scale-105",
                      "aspect-[3/4]"
                    )}
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{book.name}</h3>
                  <p className="text-xs text-muted-foreground">{book.artist}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
