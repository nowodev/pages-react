import { useState } from "react";

const birthdayList = [
  {
    id: 100001,
    name: "Bertie Yates",
    age: 30,
    src: "https://i.pravatar.cc/75?u=100001",
  },
  {
    id: 100002,
    name: "Lila Foster",
    age: 27,
    src: "https://i.pravatar.cc/75?u=100002",
  },
  {
    id: 100003,
    name: "Ethan Brooks",
    age: 35,
    src: "https://i.pravatar.cc/75?u=100003",
  },
  {
    id: 100004,
    name: "Nora Hayes",
    age: 22,
    src: "https://i.pravatar.cc/75?u=100004",
  },
  {
    id: 100005,
    name: "Miles Porter",
    age: 40,
    src: "https://i.pravatar.cc/75?u=100005",
  },
  // {
  //   id: 100006,
  //   name: "Zara Baldwin",
  //   age: 29,
  //   src: "https://i.pravatar.cc/75?u=100006",
  // },
  // {
  //   id: 100007,
  //   name: "Finn Hamilton",
  //   age: 33,
  //   src: "https://i.pravatar.cc/75?u=100007",
  // },
  // {
  //   id: 100008,
  //   name: "Chloe Barrett",
  //   age: 26,
  //   src: "https://i.pravatar.cc/75?u=100008",
  // },
  // {
  //   id: 100009,
  //   name: "Owen Maxwell",
  //   age: 38,
  //   src: "https://i.pravatar.cc/75?u=100009",
  // },
  // {
  //   id: 100010,
  //   name: "Sadie Sutton",
  //   age: 31,
  //   src: "https://i.pravatar.cc/75?u=100010",
  // },
];

export default function Birthdays() {
  const [birthdays, setBirthdays] = useState(birthdayList);

  return (
    <div className="w-full py-10 bg-pink-500 h-screen items-center flex">
      <div className="max-w-lg mx-auto bg-white border border-pink-500 w-full rounded-lg shadow pb-3">
        <h1 className="px-6 py-3 text-xl md:text-3xl font-semibold shadow text-center">
          {birthdays.length > 0 ? birthdays.length : 0} Birthdays Today
        </h1>

        <div className="max-h-[550px] overflow-auto p-6 space-y-5">
          {birthdays.map((birthday) => (
            <Birthday key={birthday.id} person={birthday} />
          ))}
        </div>

        <div className="px-6 py-3">
          <button
            onClick={() => setBirthdays([])}
            type="button"
            className="w-full px-3 py-2 text-sm md:text-base font-semibold text-white bg-pink-600 rounded-md shadow-xs cursor-pointer hover:bg-pink-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

function Birthday({ person }) {
  return (
    <div className="flex items-center space-x-3">
      <img
        className="rounded-full w-12 md:w-auto"
        src={`https://i.pravatar.cc/75?u=${person.id}`}
        alt={person.name}
      />
      <div>
        <p className="text-lg md:text-2xl font-semibold">{person.name}</p>
        <p className="-mt-1 text-sm md:text-base text-gray-500">
          {person.age} years
        </p>
      </div>
    </div>
  );
}
