import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Movie Quiz</NavLink>
          </li>
          <li>
            <NavLink to="help">Help</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Made with ❤️</footer>
    </>
  );
};
export default NavLayout;
