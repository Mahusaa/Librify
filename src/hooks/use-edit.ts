import { create } from 'zustand';


interface EditToggle {
  isEdit: boolean;
  edit: () => void;
}


export const useEdit = create<EditToggle>((set) => ({
  isEdit: false,
  edit: () => set((state) => ({ isEdit: !state.isEdit })),
}))
