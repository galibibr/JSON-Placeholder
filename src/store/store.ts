import { StoreApi, UseBoundStore, create } from "zustand";

export const useTheme: UseBoundStore<StoreApi<unknown>> = create(
    (set: any) => ({
        theme: localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : window.matchMedia("(prefers-color-scheme: dark)")
            ? "dark"
            : "light",

        modal: 'dafault',

        setTheme: (value: any) => set(() => ({ theme: value })),

        setModal: (value: string) => set(() => ({ modal: value })),
    })
);

export const useModal = create(
    (set: any) => ({
        modal: 'default',

        setModal: (value: string) => set(() => ({ modal: value })),
    })
);
