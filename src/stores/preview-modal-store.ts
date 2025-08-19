import { Project } from "@/types/dataType";
import { create } from "zustand";

type usePreviewModalProps = {
  isOpen: boolean;
  data?: Project;
  onOpen: (data: Project) => void;
  onClose: () => void;
};

export const usePreviewModalStore = create<usePreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Project) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));
