import CustomLink from "./CustomLink";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useModal } from "../store/store";

const Navbar = () => {
    const modal = useModal<string>((state) => state.modal);
    const setModal = useModal((state) => state.setModal);

    const handleOpen = () => {
        setModal("open");
    };
    const handleClose = () => {
        setModal("close");
    };

    return (
        <nav>
            {modal === "default" || modal === "close" ? (
                <button
                    onClick={handleOpen}
                    className="flex sm:hidden items-center text-[20px]">
                    <IoMenuOutline />
                </button>
            ) : (
                <button
                    onClick={handleClose}
                    className="flex sm:hidden items-center text-[20px]">
                    <IoCloseOutline />
                </button>
            )}
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
