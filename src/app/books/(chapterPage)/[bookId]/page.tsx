import { ChapterTextEditor } from "~/components/books/ChapterTextEditor"
import { getMyBooksWithChapter } from "~/server/queries";




export const revalidate = 1;

export default async function ChapterPage({
  params: { bookId: bookId },
}: {
  params: { bookId: string },
}) {
  const bookWithChapters = await getMyBooksWithChapter({ bookId })
  let defaultLayout;
  return (
    <>
      <div className="h-screen w-full">
        {bookWithChapters ? (
          <ChapterTextEditor
            book={bookWithChapters}
            defaultLayout={defaultLayout}
          />
        ) : (
          <p>Error loading book chapters. Please try again later.</p>
        )}
      </div>
    </>
  )
}
