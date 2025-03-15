import { useState } from "react";

export default function Calculator() {
  const [calcInput, setCalcInput] = useState("");
  const [total, setTotal] = useState("");
  const [history, setHistory] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  function handleButton(value) {
    if (value === "AC") return handleReset();

    if (value === "=") {
      try {
        const calcValue = eval(calcInput);
        const formattedValue = Number.isInteger(calcValue)
          ? calcValue
          : Number(calcValue).toFixed(2);

        setHistory((prevHistory) => [
          ...prevHistory,
          { id: crypto.randomUUID(), calcInput, total: formattedValue },
        ]);

        return setTotal(formattedValue);
      } catch (error) {
        handleReset();
        console.error("Calculation error:", error);
      }
    }

    if (total) handleReset();

    setCalcInput((input) => input + value);
  }

  function handleSelect(value) {
    setCalcInput(value.calcInput);
    setTotal(value.total);
    setShowMenu(false);
  }

  function handleReset() {
    setCalcInput("");
    setTotal("");
  }

  return (
    <div className="h-screen max-w-[300px] flex justify-center items-center mx-auto">
      <div className="w-full p3 border rounded-2xl relative">
        <div className="p-7 absolute h-full w-full">
          <Menu
            history={history}
            showMenu={showMenu}
            onShowMenu={() => setShowMenu(!showMenu)}
            onSelect={handleSelect}
          />
        </div>
        <div className="h-1/3 flex flex-col justify-end items-end p-7">
          <p className="text-2xl/9">{calcInput || "\u00a0"}</p>
          <p className="text-5xl font-bold">{total || "\u00a0"}</p>
        </div>
        <div className="h-2/3 px-7 pb-7 relative">
          <KeyPad onClick={handleButton} />
        </div>
      </div>
    </div>
  );
}

function Menu({ history, showMenu, onShowMenu, onSelect }) {
  return (
    <div>
      <Button onClick={onShowMenu}>
        {!showMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </Button>

      {showMenu && (
        <div className="w-full absolute max-h-72 bg-white outline p-7 rounded-xl bottom-0 left-0 z-50 overflow-y-auto">
          {history.length === 0 ? (
            "Nothing to see here"
          ) : (
            <>
              {history.map((item) => (
                <div
                  className="border-b cursor-pointer"
                  key={item.id}
                  onClick={() => onSelect(item)}
                >
                  <p>{item.calcInput}</p>
                  <h6 className="font-bold text-lg -mt-2">{item.total}</h6>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function KeyPad({ onClick }) {
  const keys = [
    { name: "AC", value: `AC` },
    { name: "", value: `` },
    { name: "%", value: `%` },
    { name: "÷", value: `/` },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "×", value: `*` },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "−", value: `-` },
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "+", value: `+` },
    { name: "0", value: 0 },
    { name: ".", value: `.` },
    { name: "=", value: `=` },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {keys.map((key) => (
        <Button
          onClick={onClick}
          value={key.value}
          styles={key.name === "0" ? "col-span-2" : ""}
          key={key.name}
        >
          {key.name}
        </Button>
      ))}
    </div>
  );
}

function Button({ value, styles, onClick, children }) {
  return (
    <button
      className={`bg-black p-3 rounded-xl text-white font-medium cursor-pointer ${styles}`}
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
