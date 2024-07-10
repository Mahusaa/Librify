import { ChapterTextEditor } from "~/components/books/ChapterTextEditor"
import { mails } from "~/data/mail-data"


export default function ChapterPage() {
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
