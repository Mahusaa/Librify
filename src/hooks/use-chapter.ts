import { create } from 'zustand';

interface ChapterSelected {
  selected: number;
  setSelected: (selected: number) => void;
}

export const useChapter = create<ChapterSelected>((set) => ({
  selected: 1,
  setSelected: (selected) => set({ selected }),
}));

