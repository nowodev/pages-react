import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import clsx from "clsx";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "30%",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Not Yet Matched",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Not Yet Matched",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Not Yet Matched",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "70%",
  },
];

export default function CardinalRewards() {
  return (
    <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
      <section className="flex items-center justify-between px-6 py-3 rounded-md bg-blue-200/20">
        <h1 className="md:text-xl font-semibold">
          Want to do Bulk Resume Upload?
        </h1>

        <Button className="flex items-center text-sm gap-x-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18 17C18 13.6863 15.3137 11 12 11C8.7616 11 6.12243 13.5656 6.00414 16.7751L6 17L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path>
            </svg>
          </span>
          Upload Bulk Resumes
        </Button>
      </section>

      <section className="p-6 rounded-md bg-blue-900/10">
        <h2 className="text-base font-semibold">Search Jobs</h2>
        <div className="grid grid-cols-2 mt-2 gap-y-5 gap-x-5 md:flex">
          <input
            type="text"
            placeholder="Keyword"
            className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />

          <input
            type="text"
            placeholder="City/Country"
            className="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
          />

          <div className="grid w-full grid-cols-1">
            <select className="w-full col-start-1 row-start-1 pl-3 py-2.5 pr-8 text-base text-gray-900 bg-white rounded-md appearance-none outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6">
              <option>Include Remote</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
            />
          </div>

          <div className="grid w-full grid-cols-1">
            <select
              id="location"
              name="location"
              defaultValue="Canada"
              className="w-full col-start-1 row-start-1 pl-3 pr-8 py-2.5 text-base text-gray-900 bg-white rounded-md appearance-none outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            >
              <option>Job Type</option>
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4"
            />
          </div>

          <Button className="flex items-center text-sm gap-x-2 col-span-2 justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
              </svg>
            </span>
            Search
          </Button>
        </div>

        <div className="flex justify-between md:justify-end mt-4 space-x-4">
          <div className="flex items-start px-2 py-1 space-x-1 text-xs font-medium text-white bg-blue-600 rounded w-fit">
            <span className="h-[1lh] flex items-center">
              <input type="checkbox" />
            </span>
            <span>Only Urgent Requirements</span>
          </div>
          <button className="flex items-center px-2 py-1 space-x-1 text-xs font-semibold text-blue-600 bg-white border border-blue-600 rounded w-fit">
            Save Search As Alert
          </button>
        </div>
      </section>

      <section className="flow-root mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-sm ring-1 ring-black/5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Rewards
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Share
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Resume
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        <p className="text-base font-semibold text-blue-600">
                          {person.name}
                        </p>
                        <p className="mt-2 text-xs text-gray-400">
                          $24 - 46k/Year | &nbsp;&nbsp;&nbsp;| 📍 IN
                        </p>
                        <p className="mt-2 space-x-1 text-xs">
                          <span className="px-2 py-1 text-white bg-blue-600 rounded">
                            Urgent Requirement
                          </span>
                          <span className="px-2 py-1 text-blue-600 bg-blue-100 rounded">
                            Client Payroll
                          </span>
                        </p>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span className="p-2 text-xs font-bold text-green-600 bg-green-100 border-2 border-green-600 rounded-3xl">
                          $30,000 Reward
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span
                          className={clsx(
                            person.matched.toLowerCase() === "not yet matched"
                              ? "text-red-600 bg-red-100 border-red-600"
                              : "text-blue-600 bg-blue-100 border-blue-600",
                            "p-2 text-xs font-bold border-2 rounded-3xl"
                          )}
                        >
                          {person.matched}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <Links />
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <Button className="flex items-center text-sm gap-x-2">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-5"
                            >
                              <path d="M12 12.5858L16.2426 16.8284L14.8284 18.2426L13 16.415V22H11V16.413L9.17157 18.2426L7.75736 16.8284L12 12.5858ZM12 2C15.5934 2 18.5544 4.70761 18.9541 8.19395C21.2858 8.83154 23 10.9656 23 13.5C23 16.3688 20.8036 18.7246 18.0006 18.9776L18 17C18 13.6863 15.3137 11 12 11C8.7616 11 6.12243 13.5656 6.00414 16.7751L6 17L6.00039 18.9776C3.19696 18.7252 1 16.3692 1 13.5C1 10.9656 2.71424 8.83154 5.04648 8.19411C5.44561 4.70761 8.40661 2 12 2Z"></path>
                            </svg>
                          </span>
                          Upload
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Links() {
  return (
    <div className="flex space-x-3">
      <button className="p-1 border rounded-full cursor-pointer hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
        </svg>
      </button>

      <button className="p-1 border rounded-full cursor-pointer hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
        </svg>
      </button>

      <button className="p-1 border rounded-full cursor-pointer hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
        </svg>
      </button>

      <button className="p-1 border rounded-full cursor-pointer hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
        </svg>
      </button>

      <button className="p-1 border rounded-full cursor-pointer hover:-translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
        </svg>
      </button>
    </div>
  );
}
