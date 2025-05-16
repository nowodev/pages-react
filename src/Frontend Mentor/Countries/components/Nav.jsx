import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Nav() {
  const [theme, setTheme] = useState(localStorage.theme);

  const changeTheme = () => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setTheme("light");
    } else {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  console.log(theme);

  return (
    <header className="px-4 bg-white dark:bg-slate-800 sm:px-6 lg:px-8">
      <div className="flex justify-between px-3 py-6 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold dark:text-white">
          Where in the world?
        </h1>
        <button
          className="flex items-center outline-none cursor-pointer dark:text-white gap-x-2"
          onClick={changeTheme}
        >
          {theme === "dark" && (
            <>
              <MoonIcon className="size-6" />
              <span>Dark Mode</span>
            </>
          )}
          {theme === "light" && (
            <>
              <SunIcon className="size-6" />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Nav;
