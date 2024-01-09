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
                    : "dark:hover:text-[#ededed] hover:text-black"
            } text-[16px] p-[5px] rounded-full`}
            onClick={() => {
                setTheme(value);
            }}>
            {children}
        </button>
    );
};

export default BtnDarkMode;
