
export interface Chapter {
  id: string;
  title: string;
  content: string | null;
  bookId: string;
  createdById: string;
  updatedAt: Date | null;
  chapterId: number;
}

