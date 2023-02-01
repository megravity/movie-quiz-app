import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
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
  );
};
export default Nav;
