import type { Chapter } from "./chapter";

export interface Book {
  id: string;
  title: string;
  imageUrl: string | null;
  year: number | null;
  author: string | null;
  description: string | null;
  createdById: string;
  createdAt: Date;
  chapters: Chapter[];
}

