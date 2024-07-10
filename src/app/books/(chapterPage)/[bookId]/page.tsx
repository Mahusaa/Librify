import { ChapterTextEditor } from "~/components/books/ChapterTextEditor"
import { mails } from "~/data/mail-data"
import { getMyBooksWithChapter } from "~/server/queries";


export default async function ChapterPage({
  params: { bookId: bookId },
}: {
  params: { bookId: string },
}) {
  const bookWithChapters = await getMyBooksWithChapter({ bookId })
  console.log(bookWithChapters)
  let defaultLayout;
  return (
    <>
      <div className="h-screen w-full">
        <ChapterTextEditor
          mails={mails}
          defaultLayout={defaultLayout}
        />
      </div>
    </>
  )
}
