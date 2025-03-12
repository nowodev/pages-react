import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router";

const navigation = [
  { name: "Frontend Mentor", href: "#" },
  { name: "React Projects", href: "react-projects" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
  { name: "Reports", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <header className="pb-32 bg-gray-800">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-700">
            <div className="flex items-center justify-between h-16 px-4 sm:px-0">
              <div className="flex items-center">
                <div className="shrink-0">
                  <Link to="/">
                    <img alt="Nowodev" src="pages.png" className="size-8" />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    {navigation.map((item, i) => (
                      <NavLink
                        key={i}
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex -mr-2 md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md group hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="border-b border-gray-700 md:hidden">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            {navigation.map((item, i) => (
              <NavLink
                key={i}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          {/* <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="shrink-0">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="rounded-full size-10"
                />
              </div>
              <div className="ml-3">
                <div className="font-medium text-white text-base/5">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-400">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="relative p-1 ml-auto text-gray-400 bg-gray-800 rounded-full shrink-0 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="px-2 mt-3 space-y-1">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div> */}
        </DisclosurePanel>
      </Disclosure>
    </header>
  );
}
