import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children }: { to: string; children: string }) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            className={`${
                match ? "text-blue-400" : "dark:text-white text-black"
            }`}>
            {children}
        </Link>
    );
};
export default CustomLink;
