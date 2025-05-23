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
        <div className="max-w-lg px-10 py-12 space-y-5 text-center bg-gray-600 rounded-2xl">
          <h1 className="text-base font-bold uppercase text-emerald-500">
            Advice #{advice.id}
          </h1>
          <p className="text-3xl font-semibold text-white">{advice.advice}</p>

          <img src={dividerDesktop} alt="Divider" />
        </div>
        <div className="relative flex h-fit group">
          <button
            disabled={isloading}
            onClick={fetchAdvice}
            className="size-12 flex items-center justify-center -mt-6 z-10 relative rounded-full cursor-pointer bg-emerald-600"
          >
            <img src={dice} alt="dice" />
          </button>
          <button className="hidden group-active:block group-hover:block absolute size-16 top-0 -left-2 -mt-8 z-0 rounded-full cursor-pointer bg-emerald-400 blur"></button>
        </div>
      </div>
    </div>
  );
}
