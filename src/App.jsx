import { Outlet } from "react-router";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

export default function App() {
  const [footerCaption, setFooterCaption] = useState("");

  return (
    <>
      <div className="min-h-full">
        <Header />

        <main className="-mt-20">
          <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-5 py-6 bg-white rounded-lg shadow-sm sm:px-6">
              <Outlet context={setFooterCaption} />
            </div>
          </div>
        </main>

        <Footer caption={footerCaption} />
      </div>
    </>
  );
}
