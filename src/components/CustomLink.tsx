import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children }: { to: string; children: string }) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            className={`${
                match ? "underline" : ""
            } dark:hover:text-[#ededed] hover:text-black duration-150`}>
            {children}
        </Link>
    );
};
export default CustomLink;
