import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className=" bg-lightGrayBg dark:bg-darkBlueBg  font-sans">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Layout;
