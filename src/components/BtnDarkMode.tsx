import { ReactNode } from "react";

const BtnDarkMode = ({
    theme,
    value,
    setTheme,
    children,
}: {
    theme: string | null;
    value: string | null;
    setTheme: (value: string | null) => void;
    children: ReactNode;
}) => {
    return (
        <button
            className={`${
                theme === value
                    ? "bg-gray-100 text-black dark:text-[#ededed] dark:bg-[#454545]"
                    : "text-gray-500 dark:hover:text-[#ededed] hover:text-black"
            } p-1 rounded-full`}
            onClick={() => {
                setTheme(value);
            }}>
            {children}
        </button>
    );
};

export default BtnDarkMode;
