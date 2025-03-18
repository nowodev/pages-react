import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import calculator from "/mortgage-repayment-calculator/icon-calculator.svg";
import empty from "/mortgage-repayment-calculator/illustration-empty.svg";

export default function MortgageRepaymentCalculator() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [errorFields, setErrorFields] = useState([]);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    // if (amount === "") setErrorFields((errorFields) => ["amount"]);
    // if (term === "") setErrorFields((errorFields) => ["term"]);
    // if (rate === "") setErrorFields((errorFields) => ["rate"]);
    // if (type === "") setErrorFields((errorFields) => ["type"]);

    const { mP, rA } = calculateMortgage(amount, rate, term);
    setMonthlyRepayment(mP);
    setRemainingAmount(rA);
  }

  function handleClear() {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setErrorFields([]);
    setMonthlyRepayment(0);
    setRemainingAmount(0);
  }

  function calculateMortgage(principal, annualRate, years) {
    let monthlyRate = annualRate / 100 / 12;
    let totalPayments = years * 12;

    if (monthlyRate === 0) {
      return (principal / totalPayments).toFixed(2);
    }

    let monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return {
      mP: monthlyPayment.toFixed(2),
      rA: monthlyPayment.toFixed(2) * totalPayments,
    };
  }

  return (
    <div className="bg-cyan-100">
      <div className="container flex flex-col items-center justify-center h-screen px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl bg-white rounded-3xl">
          <div className="grid grid-cols-2">
            <div className="p-10">
              <div className="flex items-baseline justify-between">
                <h1 className="text-2xl font-semibold text-slate-700">
                  Mortgage Calculator
                </h1>

                <button
                  className="underline cursor-pointer text-slate-500"
                  onClick={handleClear}
                >
                  Clear All
                </button>
              </div>

              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <InputField
                    label="Mortgage Amount"
                    fix="￡"
                    errorFields={errorFields}
                    value={amount}
                    onSet={setAmount}
                  />

                  <div className="flex gap-x-5">
                    <InputField
                      label="Mortgage Term"
                      fix="years"
                      position="right"
                      errorFields={errorFields}
                      value={term}
                      onSet={setTerm}
                    />
                    <InputField
                      label="Interest Rate"
                      fix="%"
                      position="right"
                      errorFields={errorFields}
                      value={rate}
                      onSet={setRate}
                    />
                  </div>

                  <MortgageType onSet={setType} />

                  <button className="flex items-center px-8 py-3 mt-10 font-bold cursor-pointer bg-lime-300 rounded-3xl text-slate-700 focus:outline-none">
                    <img src={calculator} alt="" className="mr-3" />
                    Calculate Repayments
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-slate-700 h-full rounded-r-3xl rounded-bl-[5rem]">
                {monthlyRepayment === 0 && (
                  <div className="flex flex-col items-center justify-center h-full px-4 space-y-3 text-center sm:px-6 lg:px-8">
                    <img src={empty} alt="" />
                    <p className="text-2xl font-semibold text-slate-100">
                      Results shown here
                    </p>
                    <p className="text-base text-slate-300">
                      Complete the form and click "calculate repayments" to see
                      what your monthly repayments would be.
                    </p>
                  </div>
                )}

                {monthlyRepayment > 0 && (
                  <div className="h-full py-10 outline outline-white px-9">
                    <h1 className="text-2xl font-semibold text-slate-100">
                      Your results
                    </h1>

                    <p className="mt-4 text-base text-slate-400">
                      Your results are shown below based on the information you
                      provided. To adjust the results, edit the forom and click
                      "calculate repayments" again.
                    </p>

                    <div className="mt-8 border-t-4 bg-slate-900 py-9 px-7 rounded-xl border-t-lime-400">
                      <p className="text-base text-slate-400">
                        Your monthly repayments
                      </p>
                      <h1 className="mt-1 text-5xl font-semibold text-lime-400">
                        ￡{monthlyRepayment}
                      </h1>
                      <hr className="text-slate-600 my-7" />
                      <p className="text-base text-slate-400">
                        Total you'll repay over the term
                      </p>
                      <p className="mt-1 text-xl text-slate-200">
                        ￡{remainingAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({
  position = "left",
  label,
  fix,
  value,
  onSet,
  errorFields,
}) {
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
      <Label className="block text-base font-medium text-slate-500">
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
          value={value}
          onChange={(e) => onSet(e.target.value)}
          type="number"
          className={clsx(
            inputClasses,
            "block w-full bg-white px-3 py-2.5 text-lg text-slate-900 border border-slate-300 focus:border-lime-400 focus:outline-none"
          )}
        />
      </div>
      {/* {console.log(errorFields)} */}
      {errorFields.includes("term") && <ErrorField />}
    </Field>
  );
}

function MortgageType({ onSet }) {
  const [selected, setSelected] = useState({});

  function handleSelected(value) {
    setSelected(value);
    onSet(value);
  }

  const types = [
    { name: "Repayment", id: 1 },
    { name: "Interest Only", id: 2 },
  ];
  return (
    <Field>
      <Label className="block text-base font-medium text-slate-500">
        Mortgage Type
      </Label>
      <RadioGroup
        by="name"
        value={selected}
        onChange={(e) => handleSelected(e)}
        aria-label="Server size"
        className="mt-2 space-y-3"
      >
        {types.map((type) => (
          <Radio
            key={type.name}
            value={type}
            className="relative flex px-3 py-2.5 transition border border-slate-300 focus:border-lime-400 focus:bg-lime-400/10 rounded-md cursor-pointer group focus:outline-none"
          >
            <div className="flex items-center w-full space-x-2 ">
              <span className="border rounded-full size-5 border-slate-500"></span>
              <span
                className={clsx(
                  selected?.id === type.id ? "bg-slate-500 border" : "",
                  "size-3 -ml-6 border-slate-500 rounded-full"
                )}
              ></span>
              <p className="text-base font-semibold text-slate-500">
                {type.name}
              </p>
            </div>
          </Radio>
        ))}
      </RadioGroup>
      {/* <ErrorField /> */}
    </Field>
  );
}

function ErrorField() {
  return (
    <Field>
      <Label className="text-xs text-red-500">This field is required</Label>
    </Field>
  );
}
