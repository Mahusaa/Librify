import Image from "next/image"
import { cookies } from "next/headers"
import { ChapterTextEditor } from "~/components/books/ChapterTextEditor"
import { accounts, mails } from "~/data/mail-data"


export default function chapterPage() {

  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  let defaultLayout;
  if (layout && layout.value) {
    try {
      defaultLayout = JSON.parse(layout.value);
    } catch (e) {
      console.error("Failed to parse layout cookie:", e);
      defaultLayout = undefined;
    }
  }

  let defaultCollapsed;
  if (collapsed && collapsed.value) {
    try {
      defaultCollapsed = JSON.parse(collapsed.value);
    } catch (e) {
      console.error("Failed to parse collapsed cookie:", e);
      defaultCollapsed = undefined;
    }
  }

  return (
    <>
      <div className="hidden flex-col md:flex h-full overflow-hidden">
        <ChapterTextEditor
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
        />
      </div>
    </>
  )
}
