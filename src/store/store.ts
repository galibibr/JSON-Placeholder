import { StoreApi, UseBoundStore, create } from "zustand";

export const useTheme: UseBoundStore<StoreApi<unknown>> = create(
    (set: any) => ({
        theme: localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : window.matchMedia("(prefers-color-scheme: dark)")
            ? "dark"
            : "light",
        setTheme: (value: any) => set(() => ({ theme: value })),
    })
);
