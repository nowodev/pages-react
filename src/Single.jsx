import { Outlet } from "react-router";

export default function Single() {
  return (
    <>
      <div className="min-h-full">
        <Outlet />
      </div>
    </>
  );
}
