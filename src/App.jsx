import { Outlet } from "react-router";
import Header from "./Header";

export default function App() {
  return (
    <>
      <div className="min-h-full">
        <Header />

        <main className="-mt-20">
          <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-5 py-6 bg-white rounded-lg shadow-sm sm:px-6">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
