import { Link } from "react-router";

export default function Footer({ caption }) {
  return (
    <footer className="bg-white absolute w-full bottom-0">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        {/* <Link to={caption} className="flex justify-center gap-x-6 md:order-2">
          Inspired By
        </Link> */}
        <p className="mt-8 text-center text-gray-600 text-sm/6 md:order-1 md:mt-0">
          &copy; 2025 Nowodev.
        </p>
      </div>
    </footer>
  );
}
