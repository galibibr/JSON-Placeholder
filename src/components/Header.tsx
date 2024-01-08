import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="grid grid-cols-[1fr_auto_1fr]">
            <Link to='/'>Logo</Link>
            <Navbar />
            <DarkMode />
        </header>
    );
};

export default Header;
