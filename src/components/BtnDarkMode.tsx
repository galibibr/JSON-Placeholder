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
                    ? "text-blue dark:text-blueDark bg-blueBg dark:bg-blueBgDark"
                    : "text-blueBorder dark:text-blueBorderDark hover:text-blue dark:hover:text-blueDark"
            } text-[16px] p-[5px] rounded-full`}
            onClick={() => {
                setTheme(value);
            }}>
            {children}
        </button>
    );
};

export default BtnDarkMode;
