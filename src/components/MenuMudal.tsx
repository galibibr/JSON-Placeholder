import { useRef } from "react";
import { useModal } from "../store/store";
import CustomLink from "./CustomLink";

const MenuMudal = () => {
    const modal = useModal<string>((state) => state.modal);
    const setModal = useModal((state) => state.setModal);

    const handleClose = () => {
        setModal("close");
    };

    const ref = useRef(null);
    const myModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.target === ref.current) {
            handleClose();
        }
    };
    return (
        <div
            ref={ref}
            onClick={myModal}
            className={`${
                modal === "open" && "slow-modal-trans top-[-2px] pt-[60px] min-h-[100vh]"
            } ${modal === "default" && "-top-[100%]"} ${
                modal === "close" && "-top-[100%] slow-modal"
            }  left-0 w-full z-10 overflow-hidden fixed `}>
            <ul
                className={` bg-[#ffffffcc] dark:bg-[#000000cc] backdrop-blur-[5px] backdrop-saturate-[180%] border-b border-[#c8c8c8] dark:border-[#434343] w-full flex flex-col items-center gap-3 p-[12px_12px_18px] shadow-sm dark:shadow-[#161616]`}>
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
    );
};

export default MenuMudal;
