import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import calculator from "/mortgage-repayment-calculator/icon-calculator.svg";
import empty from "/mortgage-repayment-calculator/illustration-empty.svg";

export default function MortgageRepaymentCalculator() {
  return (
    <div className="bg-cyan-100">
      <div className="container flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="bg-white rounded-3xl max-w-4xl">
          <div className="grid grid-cols-2">
            <div className="p-10">
              <div className="flex items-baseline justify-between">
                <h1 className="text-2xl font-semibold">Mortgage Calculator</h1>

                <button
                  className="text-slate-500 underline cursor-pointer"
                  onClick={() => confirm("Are you sure you want to clear all?")}
                >
                  Clear All
                </button>
              </div>

              <div className="mt-6">
                <div className="space-y-5">
                  <InputField label="Mortgage Amount" fix="￡" />

                  <div className="flex gap-x-5">
                    <InputField
                      label="Mortgage Term"
                      fix="years"
                      position="right"
                    />
                    <InputField
                      label="Interest Rate"
                      fix="%"
                      position="right"
                    />
                  </div>

                  <Types />

                  <button className="bg-amber-400 px-8 py-3 rounded-3xl font-bold flex items-center mt-10 text-slate-700 cursor-pointer focus:outline-none">
                    <img src={calculator} alt="" className="mr-3" />
                    Calculate Repayments
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-slate-700 h-full rounded-r-3xl rounded-bl-[5rem]">
                <div className="h-full items-center justify-center flex flex-col px-4 sm:px-6 lg:px-8 text-center space-y-3">
                  <img src={empty} alt="" />

                  <p className="text-slate-100 font-semibold text-2xl">
                    Results shown here
                  </p>
                  <p className="text-slate-300 text-base">
                    Complete the form and click "calculate repayments" to see
                    what your monthly repayments would be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ position = "left", label, fix }) {
  const labelClasses =
    position === "left"
      ? "border-r-0 rounded-l-md"
      : "border-l-0 rounded-r-md order-2";
  const inputClasses =
    position === "left"
      ? "rounded-r-md border-l-0"
      : "rounded-l-md border-r-0 order-1";

  return (
    <Field>
      <Label className="block font-medium text-slate-500 text-base">
        {label}
      </Label>
      <div className="flex mt-2">
        <div
          className={clsx(
            labelClasses,
            "flex items-center px-3 text-base font-bold text-slate-500 border border-slate-300 shrink-0 bg-cyan-100"
          )}
        >
          {fix}
        </div>
        <Input
          type="number"
          className={clsx(
            inputClasses,
            "block w-full bg-white px-3 py-2.5 text-lg text-slate-900 border border-slate-300 focus:outline-none"
          )}
        />
      </div>
    </Field>
  );
}

function Types() {
  const [selected, setSelected] = useState({});

  const types = [
    { name: "Repayment", id: 1 },
    { name: "Interest Only", id: 2 },
  ];
  return (
    <Field>
      <Label className="block font-medium text-slate-500 text-base">
        Mortgage Type
      </Label>
      <RadioGroup
        by="name"
        value={selected}
        onChange={setSelected}
        aria-label="Server size"
        className="space-y-3 mt-2"
      >
        {types.map((type) => (
          <Radio
            key={type.name}
            value={type}
            className="relative flex px-3 py-2.5 transition border border-slate-300 rounded-md cursor-pointer group focus:outline-none "
          >
            <div className="flex items-center w-full space-x-2 ">
              <span
                className={clsx(
                  selected?.id === type.id ? "bg-black" : "",
                  "size-5 border rounded-full"
                )}
              ></span>
              <p className="font-semibold text-base text-slate-500">
                {type.name}
              </p>
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </Field>
  );
}
