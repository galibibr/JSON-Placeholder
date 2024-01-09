import { useEffect, useState } from "react";
import {
    IoSunnyOutline,
    IoMoonOutline,
    IoLaptopOutline,
} from "react-icons/io5";
import BtnDarkMode from "./BtnDarkMode";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function owWindowMatch() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }
    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                owWindowMatch();
                break;
        }
    }, [theme]);

    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark");
            } else {
                element.classList.remove("dark");
            }
        }
    });

    return (
        <div className="rounded-full border dark:border-[#4e4e4e] p-[3px] flex justify-self-end">
            <BtnDarkMode theme={theme} value="light" setTheme={setTheme}>
                <IoSunnyOutline />
            </BtnDarkMode>
            <BtnDarkMode theme={theme} value="" setTheme={setTheme}>
                <IoLaptopOutline />
            </BtnDarkMode>
            <BtnDarkMode theme={theme} value="dark" setTheme={setTheme}>
                <IoMoonOutline />
            </BtnDarkMode>
        </div>
    );
};

export default DarkMode;
