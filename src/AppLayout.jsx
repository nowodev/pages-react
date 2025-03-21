import { Outlet } from "react-router";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

export default function AppLayout() {
  const [footerCaption, setFooterCaption] = useState("");

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />

        <main className="-mt-20 flex-1">
          <div className="px-4 pb-12 mx-auto max-w-[1440px] sm:px-6 lg:px-8">
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