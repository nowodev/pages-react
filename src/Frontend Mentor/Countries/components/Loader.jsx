import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

function Loader() {
  return (
    <div className="flex items-center justify-center h-full pt-10 animate-spin">
      <CursorArrowRippleIcon className="size-6" />
    </div>
  );
}

export default Loader;
