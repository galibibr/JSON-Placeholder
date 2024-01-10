import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="dark:bg-[#000000] dark:text-[#fff] text-[#000] min-h-full flex flex-col">
            <Header />
            <main className="grow-[1] mt-[51px] lg:mt-[55px] px-3 max-w-[1400px] mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
