import { create } from 'zustand';

interface SaveState {
  isSaving: boolean;
  setIsSaving: (isSaving: boolean) => void;
}

export const useSaving = create<SaveState>((set) => ({
  isSaving: false,
  setIsSaving: (isSaving) => set({ isSaving }),
}));

