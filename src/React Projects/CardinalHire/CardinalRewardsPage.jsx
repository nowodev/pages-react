import { MainButton } from "./Button";
import clsx from "clsx";
import company from "./company.png";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: 30,
    reward: "1000",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Upload to see Match %",
    reward: "1000",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Upload to see Match %",
    reward: "1000",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: "Upload to see Match %",
    reward: "1000",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
    matched: 70,
    reward: "1000",
  },
];

export default function CardinalRewardsPage() {
  return (
    <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="mb-3 text-4xl font-semibold text-red-500">
          Help us find Talent!
        </h1>
        <p className="mb-3 text-lg">
          Think you know someone who will thrive in any of these positions?
          Refer them and earn a hefty bonus if they get hired!
        </p>
      </section>

      <section className="flow-root mt-8 space-y-3">
        <h3 className="text-2xl font-semibold">Employers Offering Rewards</h3>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full px-1 py-2 align-middle">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Job
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Match %
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Reward
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Social
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      <span className="sr-only">Resume</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        <div className="flex items-center gap-x-3">
                          <div className="bg-transparent rounded-full size-12">
                            <img
                              className="w-full h-full rounded-full"
                              src={company}
                              alt={person.name}
                            />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-blue-600">
                              {person.title}
                            </p>
                            <p className="text-xs text-gray-400">
                              Company 1 &bull; New York, NY &bull; $24 -
                              46k/Year
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span
                          className={clsx(
                            typeof person.matched == "number"
                              ? "text-blue-600 bg-blue-100 border-blue-600  border-2 rounded-3xl p-2"
                              : "font-medium text-gray-400",
                            "font-bold"
                          )}
                        >
                          {person.matched}{" "}
                          {typeof person.matched == "number" ? "%" : ""}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span className="p-2 text-xs font-bold text-green-600 bg-green-100 border-2 border-green-600 rounded-3xl">
                          ${person.reward}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <Links />
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <MainButton className="text-xs !font-medium">
                          Upload Resume
                        </MainButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-white">
                  <tr>
                    <td
                      className="py-5 text-lg text-center text-blue-500 underline"
                      colSpan={5}
                    >
                      See More
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="flow-root mt-8 space-y-3">
        <h3 className="text-2xl font-semibold">Talent Offering Rewards</h3>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full px-1 py-2 align-middle">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Job
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Background
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Reward
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Social
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      <span className="sr-only">Resume</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        <div className="flex items-center gap-x-3">
                          <div className="bg-transparent rounded-full size-12">
                            <img
                              className="w-full h-full rounded-full"
                              src={company}
                              alt={person.name}
                            />
                          </div>
                          <div>
                            <p className="text-base font-semibold text-blue-600">
                              {person.title}
                            </p>
                            <p className="text-xs text-gray-400">
                              Company 1 &bull; New York, NY &bull; $24 -
                              46k/Year
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        Top 3
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span className="p-2 text-xs font-bold text-green-600 bg-green-100 border-2 border-green-600 rounded-3xl">
                          ${person.reward}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <Links />
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <MainButton className="text-xs !font-medium">
                          Intro Me
                        </MainButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-white">
                  <tr>
                    <td
                      className="py-5 text-lg text-center text-blue-500 underline"
                      colSpan={5}
                    >
                      See More
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-semibold text-center text-red-500 mb-9">
          What is a referral program?
        </h1>

        <Steps />
      </section>
    </div>
  );
}

function Links() {
  return (
    <div className="flex space-x-3">
      <button className="p-1 text-blue-500 border rounded-full cursor-pointer hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
        </svg>
      </button>

      <button className="p-1 text-blue-700 border rounded-full cursor-pointer hover:text-blue-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
        </svg>
      </button>

      <button className="p-1 text-blue-600 border rounded-full cursor-pointer hover:text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
        </svg>
      </button>

      <button className="p-1 text-black border rounded-full cursor-pointer hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
        </svg>
      </button>

      <button className="p-1 text-blue-400 border rounded-full cursor-pointer hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
        </svg>
      </button>
      <button className="p-1 text-pink-600 border rounded-full cursor-pointer hover:text-pink-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </button>

      <button className="p-1 text-black border rounded-full cursor-pointer hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      </button>
    </div>
  );
}

function Steps() {
  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto space-y-5 itemscenter">
      <div className="flex items-center py-4 pl-4 pr-10 space-x-5 border border-gray-300 rounded-lg shadow-md w-fit">
        <p className="text-blue-500 text-7xl">01</p>
        <div>
          <p className="text-lg font-semibold">Referral Submission</p>
          <p className="text-base">
            You refer a candidate who you believe is a good fit
          </p>
        </div>
      </div>

      <div className="flex items-center self-end py-4 pl-4 pr-10 space-x-5 border border-gray-300 rounded-lg shadow-md w-fit">
        <p className="text-blue-500 text-7xl">02</p>
        <div>
          <p className="text-lg font-semibold">Application & Review</p>
          <p className="text-base">
            The candidate applies and recruiters assess.
          </p>
        </div>
      </div>

      <div className="flex items-center py-4 pl-4 pr-10 space-x-5 border border-gray-300 rounded-lg shadow-md w-fit">
        <p className="text-blue-500 text-7xl">03</p>
        <div>
          <p className="text-lg font-semibold">Interview & Selection</p>
          <p className="text-base">
            The candidate goes through the hiring process.
          </p>
        </div>
      </div>

      <div className="flex items-center self-end py-4 pl-4 pr-10 space-x-5 border border-gray-300 rounded-lg shadow-md w-fit">
        <p className="text-blue-500 text-7xl">04</p>
        <div>
          <p className="text-lg font-semibold">Reward & Hiring</p>
          <p className="text-base">
            If hired, then you will get the listed reward!
          </p>
        </div>
      </div>
    </div>
  );
}
