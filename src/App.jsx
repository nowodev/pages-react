import { Outlet } from "react-router";
import Header from "./Header";

export default function App() {
  return (
    <>
      <div className="min-h-full">
        <Header />

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
