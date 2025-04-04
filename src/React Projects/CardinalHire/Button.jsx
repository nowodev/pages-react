import clsx from "clsx";

export function MainButton({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "px-4 py-2 text-base font-semibold bg-blue-800 text-white border cursor-pointer rounded-lg hover:bg-blue-900 outline-none"
      )}
    >
      {text ?? children}
    </button>
  );
}

export function MiniButton({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "items-center text-sm bg-white text-gray-500 font-medium hover:bg-gray-100 border border-gray-300 cursor-pointer py-1 px-3 rounded-lg outline-none"
      )}
    >
      {text ?? children}
    </button>
  );
}
