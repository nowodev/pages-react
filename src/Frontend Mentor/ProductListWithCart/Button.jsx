import { classNames } from "../../functions";

export function PrimaryButton({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "px-8 lg:px-5 py-3 lg:py-2 text-base lg:text-xs lg:w-full lg:max-w-35 font-semibold bg-white border cursor-pointer border-amber-500 rounded-3xl h-fit gap-x-3 lg:gap-x-1 hover:text-amber-500"
      )}
    >
      {text ?? children}
    </button>
  );
}

export function SecondaryButton({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "w-full p-3 text-base font-semibold text-white cursor-pointer bg-amber-800 rounded-3xl"
      )}
    >
      {text ?? children}
    </button>
  );
}
