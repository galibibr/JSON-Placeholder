import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";
import { Container } from "@mui/material";

const Header = () => {
    return (
        <header className="fixed w-full shadow-sm border-b border-[#c8c8c8] dark:border-[#434343] dark:bg-black/50 backdrop-blur-[10px] z-10">
            <Container>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-2 py-3 px-3 xl:px-0 items-center">
                    <Link to="/" className="justify-self-start">
                        Logo
                    </Link>
                    <Navbar />
                    <DarkMode />
                </div>
            </Container>
        </header>
    );
};

export default Header;
