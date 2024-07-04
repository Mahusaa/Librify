import { cn } from "~/lib/utils";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";



export default async function BookPage() {
  const albumsData = [
    {
      name: "React Rendezvous",
      artist: "Ethan Byte",
      cover:
        "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
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
          <h2 className="text-2xl font-semibold tracking-tight">Listen Now</h2>
          <p className="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <div className="flex space-x-4 pb-4">
          {albumsData.map((album) => (
            <div key={album.name} className={cn("space-y-3 w-[250px]")}>
              <div className="overflow-hidden rounded-md">
                <Image
                  src={album.cover}
                  alt={album.name}
                  width={250}
                  height={330}
                  className={cn(
                    "h-auto w-auto object-cover transition-all hover:scale-105",
                    "aspect-[3/4]"
                  )}
                />
              </div>
              <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{album.name}</h3>
                <p className="text-xs text-muted-foreground">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
