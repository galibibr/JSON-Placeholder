import CustomLink from "./CustomLink";
import { useModal } from "../store/store";

const Navbar = () => {
    const modal = useModal<string>((state) => state.modal);
    const setModal = useModal((state) => state.setModal);

    const handleModal = () => {
        if (modal === "default" || modal === "close") {
            setModal("open");
        } else {
            setModal("close");
        }
    };

    return (
        <nav>
            <div
                className={`menu-container sm:hidden ${
                    modal === "default" || modal === "close" ? "" : "change"
                }`}
                onClick={handleModal}>
                <div className="bar1 bg-[#000] dark:bg-[#fff]"></div>
                <div className="bar2 bg-[#000] dark:bg-[#fff]"></div>
                <div className="bar3 bg-[#000] dark:bg-[#fff]"></div>
            </div>
            <ul className="hidden sm:flex justify-center gap-3">
                <li>
                    <CustomLink to="posts">Posts</CustomLink>
                </li>
                <li>
                    <CustomLink to="comments">Comments</CustomLink>
                </li>
                <li>
                    <CustomLink to="albums">Albums</CustomLink>
                </li>
                <li>
                    <CustomLink to="photos">Photos</CustomLink>
                </li>
                <li>
                    <CustomLink to="todos">Todos</CustomLink>
                </li>
                <li>
                    <CustomLink to="users">Users</CustomLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
