import { create } from "zustand";
import { combine } from "zustand/middleware";

type ConfigureStore = {
  theme: string;
  setIsDark: () => void;
  setIsLight: () => void;
};
export const useConfigureStore = create<ConfigureStore>()(
  combine({ theme: "dark" }, (set) => ({
    setIsDark: () => set({ theme: "dark" }),
    setIsLight: () => set({ theme: "light" }),
  }))
);
