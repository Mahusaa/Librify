import { create } from 'zustand';

interface ChapterSelected {
  selected: number | null;
  setSelected: (selected: number) => void;
}

export const useChapter = create<ChapterSelected>((set) => ({
  selected: null,
  setSelected: (selected) => set({ selected }),
}));

