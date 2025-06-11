import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

function Loader() {
  return (
    <div className="flex items-center justify-center h-full pt-10 animatespin">
      {/* <CursorArrowRippleIcon className="size-6" /> */}
      <svg width="60" height="60" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#60A5FA"
          stroke-width="1"
          fill="none"
        ></circle>
        <circle
          cx="25"
          cy="25"
          r="15"
          stroke="#60A5FA"
          stroke-width="1"
          fill="none"
        ></circle>
        <circle r="2" fill="#60A5FA">
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M25,5 A20,20 0 1,1 25,45 A20,20 0 1,1 25,5"
          ></animateMotion>
        </circle>
        <circle r="2" fill="#60A5FA">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M25,5 A20,20 0 1,1 25,45 A20,20 0 1,1 25,5"
          ></animateMotion>
        </circle>
        <circle r="2" fill="#60A5FA">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M25,5 A20,20 0 1,1 25,45 A20,20 0 1,1 25,5"
          ></animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export default Loader;
