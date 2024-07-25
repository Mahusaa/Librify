import { Separator } from "~/components/ui/separator";
import Link from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <div className="p-4 md:p-6 space-y-8 md:space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Librify: Your Personal Digital Library</h1>
        <p className="text-lg md:text-xl">Organize, write summaries, and explore books like never before</p>
        {session ? (
          <h2 className="text-muted-foreground">The app is currently in development and best viewed on desktop or PC. Mobile responsiveness is being worked on.</h2>
        ) : (
          <Link href="/sign-in">
            <Button className="mt-4 md:mt-6">
              Get Started for Free
            </Button>
          </Link>
        )}
      </section>
      <Separator />

      {/* Scrollable Content */}
      <ScrollArea className="h-[calc(100vh-300px)] md:h-[calc(100vh-350px)] overflow-y-auto">
        <div className="space-y-8 md:space-y-12 pr-4">
          {/* Key Features Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { feature: "Digital Bookshelf", description: "Organize your books in a personal digital library, accessible anytime." },
                { feature: "Chapter-by-Chapter Reading", description: "Dive into books one chapter at a time, tracking your progress easily." },
                { feature: "Book Details", description: "Access comprehensive details about each book, including author, genre, and more." },
                { feature: "Reading Progress Tracker", description: "Keep track of your reading journey with our intuitive progress tracker." }
              ].map(({ feature, description }) => (
                <div key={feature} className="border p-3 md:p-4 rounded-lg">
                  <h3 className="font-semibold">{feature}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </section>
          <Separator />
          {/* Benefits Section */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { benefit: "Organize Your Reading", description: "Easily organize and manage your book collection, categorizing by genre, author, or personal preference." },
                { benefit: "Discover New Titles", description: "Explore new books and authors based on your interests and reading history." },
                { benefit: "Read Anywhere, Anytime", description: "Access your library from any device, whether you're at home or on the go." },
                { benefit: "Enhance Your Reading Experience", description: "Take notes, write summaries, and highlight important passages as you read." }
              ].map(({ benefit, description }) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold">{benefit}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Separator />
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "Add Books", description: "Easily add books to your library by searching or manually entering details." },
                { step: "Organize Chapters", description: "Organize your reading by creating chapter-by-chapter summaries or notes." },
                { step: "Read and Track", description: "Read your books on any device and track your reading progress seamlessly." },
                { step: "Explore More", description: "Discover additional features and tools designed to enhance your reading experience." }
              ].map(({ step, description }, index) => (
                <div key={step} className="text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}

