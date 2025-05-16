import { Outlet } from "react-router";
import Nav from "./Nav";

function Layout() {
  return (
    <div>
      <Nav />
      <div className="bggray-900 min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
