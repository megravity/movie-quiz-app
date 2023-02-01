import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <footer>Made with ❤️</footer>
    </>
  );
};
export default NavLayout;
