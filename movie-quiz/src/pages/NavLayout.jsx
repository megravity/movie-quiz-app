import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <div className="bg-img-container">
        <Outlet />
      </div>
      <footer>Made with ❤️</footer>
    </>
  );
};
export default NavLayout;
