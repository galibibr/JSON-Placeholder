import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <div className="dark:bg-[#000000] dark:text-[#fff] text-[#000] min-h-full flex flex-col">
            <Header />
            <main className="grow-[1] mt-[60px] lg:mt-[63px] xl:mt-[68px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
