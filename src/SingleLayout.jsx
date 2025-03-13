import { Outlet } from "react-router";

export default function SingleLayout() {
  return (
    <>
      <div className="min-h-full">
        <Outlet />
      </div>
    </>
  );
}
