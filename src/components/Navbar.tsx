import { useRef, useState } from "react";
import CustomLink from "./CustomLink";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
    const [modal, setModal] = useState<string>("default");
    const ref = useRef(null);

    const handleOpen = () => {
        setModal("open");
    };
    const handleClose = () => {
        setModal("close");
    };
    const myModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === ref.current) {
            handleClose();
        }
    };

    return (
        <nav>
            <button
                onClick={handleOpen}
                className="flex sm:hidden items-center text-[20px]">
                <IoMenuOutline />
            </button>
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
            <div
                ref={ref}
                onClick={myModal}
                className={`${
                    modal === "open" && "slow-modal-trans top-0 h-screen"
                }
                    ${modal === "default" && "-top-[550%]"} ${
                    modal === "close" && "-top-[500%] slow-modal"
                } absolute left-0 w-full z-50`}>
                <ul
                    className={`bg-white dark:bg-black w-full flex flex-col items-center gap-1 p-3 shadow-md dark:shadow-[#1c1c1c] dark:border-[#434343]`}>
                    <li>
                        <button
                            onClick={handleClose}
                            className="flex sm:hidden items-center text-[20px]">
                            <IoCloseOutline />
                        </button>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="posts">Posts</CustomLink>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="comments">Comments</CustomLink>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="albums">Albums</CustomLink>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="photos">Photos</CustomLink>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="todos">Todos</CustomLink>
                    </li>
                    <li onClick={handleClose}>
                        <CustomLink to="users">Users</CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
