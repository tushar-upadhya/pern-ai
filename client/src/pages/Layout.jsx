import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div>
      <h1>layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
