import party from "./assets/party.png";

const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=004182&color=fff&name=Lindsay+Walton",
    earning: "50,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=004182&color=fff&name=Lindsay+Walton",
    earning: "40,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=004182&color=fff&name=Lindsay+Walton",
    earning: "30,000",
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    image:
      "https://ui-avatars.com/api/?background=004182&color=fff&name=Lindsay+Walton",
    earning: "20,000",
  },
];

export default function CardinalLeaderboard() {
  return (
    <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
      <section className="flex items-center justify-center mx-auto text-center max-w-7xl">
        <img src={party} />
        <div>
          <h1 className="mb-3 text-4xl font-semibold text-red-500">
            Leaderboard
          </h1>
          <p className="mb-3 text-lg">
            See who has earned the most from referrals!
          </p>
        </div>
        <img src={party} className="scale-x-[-1]" />
      </section>

      <section className="flow-root mt-8">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full px-1 py-2 align-middle">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
              <table className="min-w-full divide-y divide-gray-300">
                <tbody className="bg-white">
                  {people.map((person, i) => (
                    <tr key={i} className="even:bg-gray-50">
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        <p>
                          <span className="p-3 text-lg text-blue-700 bg-gray-200 border rounded-full border-amber-400">
                            #{i + 1}
                          </span>
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
                        <p>${person.earning}</p>
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
