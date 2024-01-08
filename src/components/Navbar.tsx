import DarkMode from "./DarkMode";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-3">
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
      <DarkMode />
    </nav>
  );
};

export default Navbar;
