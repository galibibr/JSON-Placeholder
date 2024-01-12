import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import MenuMudal from "./MenuMudal";

const Header = () => {
    return (
        <>
            <header className="fixed w-full z-20 bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-blur-[5px] backdrop-saturate-[180%] shadow-sm border-b border-[#c8c8c8] dark:border-[#434343]">
                <Container>
                    <div className="grid grid-cols-[1fr_1fr] gap-2 py-3 items-center">
                        {/* <Link to="/" className="justify-self-start">
                            Logo
                        </Link> */}
                        <Navbar />
                        <DarkMode />
                    </div>
                </Container>
            </header>

            <MenuMudal />
        </>
    );
};

export default Header;
