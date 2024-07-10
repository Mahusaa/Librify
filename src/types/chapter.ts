export interface Chapter {
  id: number;
  title: string;
  content: string | null;
  bookId: string;
  createdById: string;
  updatedAt: Date | null;
  chapterId: number;
}

