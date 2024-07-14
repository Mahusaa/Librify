import { create } from 'zustand';


interface EditToggle {
  isEdit: boolean;
  edit: () => void;
}


export const useEdit = create<EditToggle>((set) => ({
  isEdit: true,
  edit: () => set((state) => ({ isEdit: !state.isEdit })),
}))
