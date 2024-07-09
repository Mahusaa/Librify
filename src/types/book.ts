import type { Chapter } from "./chapter";

export interface Book {
  id: string;
  title: string;
  image: string | null;
  year: number | null;
  author: string | null;
  createdById: string;
  createdAt: Date;
  chapters: Chapter[];
}

