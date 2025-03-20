import clsx from "clsx";
import board from "./board.svg";

const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Lindsay+Walton",
    earning: "50,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Lindsay+Walton",
    earning: "50,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Lindsay+Walton",
    earning: "50,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=Lindsay+Walton",
    earning: "50,000",
  },
];

export default function CardinalLeaderboard() {
  return (
    <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
      <section className="flex items-center justify-between px-6 py-3 space-x-3 rounded-md bg-blue-200/20">
        <div>
          <h1 className="font-medium text-blue-600 text-3xl md:text-5xl tracking-wide">
            Leaderboard
          </h1>
          <p className="text-sm md:text-lg mt-2 tracking-wide">
            Potential to earn Up to $10 Million Commission (You wish)
          </p>
        </div>

        <img className="size-24" src={board} alt="Board" />
      </section>

      <section className="flow-root mt-8">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle px-1">
            <div className="overflow-hidden shadow-sm ring-1 ring-black/5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 pl-4 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Ranking
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Members
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Total Earning
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        <p
                          className={clsx(
                            i === 0 ? "text-blue-900 font-semibold text-xl" : ""
                          )}
                        >
                          {i + 1}
                        </p>
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <img
                            className="w-10 rounded-full"
                            src={person.image}
                            alt={person.name}
                          />
                          {person.name}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm whitespace-nowrap">
                        <p
                          className={clsx(
                            i === 0 ? "text-blue-900 text-xl font-semibold" : ""
                          )}
                        >
                          ${person.earning}
                        </p>
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
