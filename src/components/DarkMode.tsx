import { useEffect, useState } from "react";

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
        <div>
            <button
                className="text-gray-500 px-3"
                onClick={() => {
                    setTheme("dark");
                }}>
                dark
            </button>
            <button
                className="text-gray-500 px-3"
                onClick={() => {
                    setTheme("light");
                }}>
                light
            </button>
            <button
                className="text-gray-500 px-3"
                onClick={() => {
                    setTheme("system");
                }}>
                system
            </button>
        </div>
    );
};

export default DarkMode;
