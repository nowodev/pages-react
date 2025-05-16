import { MoonIcon } from "@heroicons/react/24/outline";

function Nav() {
  return (
    <header className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="p-3 flex justify-between max-w-7xl mx-auto">
        <h1 className="font-bold text-xl">Where in the world?</h1>
        <button className="flex items-center gap-x-2">
          <MoonIcon className="size-4"/>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Nav;
