import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navbar = () => {


  return (
    <nav>
      <ul className="flex justify-center gap-3">
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="comments">Comments</Link>
        </li>
        <li>
          <Link to="albums">Albums</Link>
        </li>
        <li>
          <Link to="photos">Photos</Link>
        </li>
        <li>
          <Link to="todos">Todos</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
