import type { PartialBlock } from "@blocknote/core";
export interface Chapter {
  id: number;
  title: string;
  content: PartialBlock[];
  bookId: string;
  createdById: string;
  updatedAt: Date | null;
  chapterId: number;
}

