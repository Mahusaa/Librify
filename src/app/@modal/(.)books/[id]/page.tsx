
import { Suspense } from "react";
import BookModal from "~/components/BookModal";
import CloseModal from "~/components/CloseModal"
import { getMyBooksWithChapter } from "~/server/queries";


const Page = async ({
  params: { id: bookId },
}: {
  params: { id: string }
}) => {
  const book = await getMyBooksWithChapter({ bookId })
  return (
    <Suspense fallback={<p>Loading book ...</p>}>
      <div className='fixed inset-0 bg-zinc-900/20 z-10'>
        <div className='container flex items-center h-full max-w-lg mx-auto'>
          <div className='relative bg-white  w-full h-fit py-12 px-2 rounded-lg'>
            <div className='absolute top-4 right-4'>
              <CloseModal />
            </div>
            {book ? (
              <BookModal book={book} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Page;

