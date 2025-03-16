import { useEffect, useState } from "react";
import dice from "/advice-generator/icon-dice.svg";
import dividerDesktop from "/advice-generator/pattern-divider-desktop.svg";
// import dividerMobile from "/advice-generator/pattern-divider-mobile.svg";

export default function AdviceGenerator() {
  const [advice, setAdvice] = useState({});
  const [isloading, setIsLoading] = useState(false);

  async function fetchAdvice() {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      setIsLoading(false);
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    setAdvice(data.slip);
    setIsLoading(false);
    return;
  }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-slate-800">
      <div className="container flex flex-col items-center justify-center h-screen px-4 mx-auto">
        <div className="max-w-lg p-10 space-y-5 text-center bg-gray-600 rounded-md">
          <h1 className="text-xs font-bold uppercase text-emerald-500">
            Advice #{advice.id}
          </h1>
          <p className="text-3xl font-semibold text-white">{advice.advice}</p>

          <img src={dividerDesktop} alt="Divider" />
        </div>
        <button
          disabled={isloading}
          onClick={fetchAdvice}
          className="p-3 -mt-6 rounded-full cursor-pointer hover:shadow-2xl hover:scale-110 shadow-emerald-300 bg-emerald-600 w-fit"
        >
          <img src={dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}
