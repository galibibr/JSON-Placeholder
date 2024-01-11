import { useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import BtnDarkMode from "./BtnDarkMode";
import { useTheme } from "../store/store";

const DarkMode = () => {
    const theme = useTheme((state: any) => state.theme);
    const setTheme = useTheme((state: any) => state.setTheme);
    // const [theme, setTheme] = useState(
    //     localStorage.getItem("theme") ? l-ocalStorage.getItem("theme") : "system"
    // );

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
        <div className="rounded-full border border-blueBorder dark:border-blueBorderDark p-[3px] flex justify-self-end">
            <BtnDarkMode theme={theme} value="light" setTheme={setTheme}>
                <IoSunnyOutline />
            </BtnDarkMode>
            {/* <BtnDarkMode theme={theme} value="system" setTheme={setTheme}>
                <IoLaptopOutline />
            </BtnDarkMode> */}
            <BtnDarkMode theme={theme} value="dark" setTheme={setTheme}>
                <IoMoonOutline />
            </BtnDarkMode>
        </div>
    );
};

export default DarkMode;
