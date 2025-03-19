import { classNames } from "../../functions";

export default function Button({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "px-4 py-2 text-base font-semibold bg-blue-800 text-white border cursor-pointer rounded-lg hover:bg-blue-900"
      )}
    >
      {text ?? children}
    </button>
  );
}
