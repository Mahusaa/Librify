interface Chapter {
  id: number;
  title: string;
  content: string | null;
  bookId: string;
  createdById: string;
  updatedAt: Date | null;
  chapterId: number | null;
}

interface Book {
  id: string;
  title: string;
  image: string | null;
  year: number | null;
  author: string | null;
  createdById: string;
  createdAt: Date;
  chapters: Chapter[];
}

export interface BookModalProps {
  book: Book;
}
