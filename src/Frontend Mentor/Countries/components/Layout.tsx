import { Outlet } from "react-router";
import Nav from "./Nav";

function Layout() {
  return (
    <div>
      <Nav />
      <div className="min-h-dvh bg-gray-100 dark:bg-slate-700">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
