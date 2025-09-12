import { SignIn, useUser } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { assets } from "../assets/assets";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isSidebar, setIsSidebar] = useState(false);
  return user ? (
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img
          src={assets.logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="cursor-pointer w-32 sm:w-44"
        />
        {isSidebar ? (
          <X
            className="size-6 text-gray-600 sm:hidden"
            onClick={() => setIsSidebar(false)}
          />
        ) : (
          <Menu
            className="size-6 text-gray-600 sm:hidden"
            onClick={() => setIsSidebar(true)}
          />
        )}
      </nav>

      <div className="flex-1 w-full flex h-(calc(100vh-64px))">
        <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />

        <div className="flex-1 bg-[#f4f7fb]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
