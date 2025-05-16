import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

function Loader() {
  return (
    <div className="mt-10 flex justify-center items-center h-full animate-spin">
      <CursorArrowRippleIcon className="size-6" />
    </div>
  );
}

export default Loader;
