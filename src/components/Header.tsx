import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="grid grid-cols-[1fr_auto_1fr] gap-2 py-2 px-3 items-center fixed w-full border-b dark:border-[#434343] bg-white/50 dark:bg-black/50 backdrop-blur-[10px] z-10">
            <Link to="/" className="justify-self-start">
                Logo
            </Link>
            <Navbar />
            <DarkMode />
        </header>
    );
};

export default Header;
