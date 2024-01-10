import { create } from "zustand";

export const useTheme = create((set) => ({
    theme: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : window
              .matchMedia("(prefers-color-scheme: dark)")
        ? "dark"
        : "light",
    setTheme: (value: any) => set(() => ({ theme: value })),
}));
