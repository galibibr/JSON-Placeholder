import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children }: { to: string; children: string }) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            className={`${
                match ? "underline" : ""
            } dark:hover:text-blueDark hover:text-blue duration-150`}>
            {children}
        </Link>
    );
};
export default CustomLink;
