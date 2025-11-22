import { Outlet } from "react-router";
import { ToastProvider } from "./components/ui/toast";

export default function SingleLayout() {
  return (
    <>
      <div className="min-h-full">
        <ToastProvider>
          <Outlet />
        </ToastProvider>
      </div>
    </>
  );
}
