import { NavLink } from "react-router";
import sophia from "/cardinaltalent/sophia.png";
import ryan from "/cardinaltalent/ryan.png";
import sophiaAvatar from "/cardinaltalent/sophia-avatar.png";
import clearCapital from "/cardinaltalent/clear-capital.png";
import talent from "/cardinaltalent/talent.png";

import { Field, Input, Label } from "@headlessui/react";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { classNames } from "../functions";
import { Link } from "react-router";

const navigation = [
  { name: "AI Power Networker", href: "#" },
  { name: "AI Interviewer", href: "#" },
  { name: "Sign up", href: "#" },
  { name: "Login", href: "#" },
];

const footerNav = [
  { name: "About Us", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Don't sell my personal info", href: "#" },
  { name: "OPT out", href: "#" },
];

export default function CardinalTalent() {
  return (
    <div>
      <header className="p-4 -m-6 border-b-2 border-blue-800">
        <nav className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">CardinalTalent</h1>
          </div>

          <div className="hidden space-x-5 md:flex">
            {navigation.map((nav, i) => (
              <NavLink key={i} to={nav.href}>
                {nav.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <div className="w-full px-6 py-10">
        <section className="mt-10">
          <h1 className="text-xl font-semibold text-center lg:text-4xl">
            Get connected with top CEOs/founders/executives, investors, or
            talent from Stanford, MIT, Google, Meta, and more!
          </h1>
        </section>

        <section className="grid items-center grid-cols-1 mt-20 space-y-5 lg:grid-cols-2 lg:space-y-0">
          <img className="h-fit" src={sophia} alt="Sophia" />

          <div className="space-y-10">
            <div className="flex space-x-3">
              <img
                src={sophiaAvatar}
                alt="Sophia"
                className="rounded-full size-16"
              />
              <p className="p-3 text-sm font-semibold text-white bg-blue-800 rounded-lg lg:p-6 lg:text-lg w-fit">
                Share your email and phone number <br /> with me and I'll give
                you a call.
              </p>
            </div>

            <div className="px-5 pt-5 pb-10 space-y-5 rounded-lg shadow-2xl">
              <Form label="Name" name="full_name" />
              <Form label="Email" name="email" />
              <Form label="Phone Number" name="phone" />
              <Form label="LinkedIn" name="linkedin" required={false} />
              <div className="col-span-full">
                <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                  <div className="text-center">
                    <CloudArrowUpIcon
                      aria-hidden="true"
                      className="mx-auto text-gray-300 size-12"
                    />
                    <div className="flex mt-4 text-gray-600 text-sm/6">
                      <label
                        htmlFor="file-upload"
                        className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                      >
                        <span>Upload resume</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-gray-600 text-xs/5">
                      PDF, DOCX up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button text="Call Me Now" />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mt-30">
          <h2 className="text-xl font-medium">
            1,000s of Companies are on CardinalTalent.ai. Get Intro’d to 50+ of
            them at Once.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-9">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num, i) => (
              <img
                key={num}
                className="h-10"
                src={clearCapital}
                alt={`Brand ${i}`}
              />
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-4 text-center">
          <h2 className="text-2xl">
            Collaborate with leading Silicon Valley companies from anywhere in
            the world
          </h2>

          <p className="text-lg">
            Set your own rate, enjoy bi-weekly payments, and build lasting
            partnerships.
          </p>

          <Button text="Apply as Talent" />

          <img src={talent} alt="Talent" />
        </section>

        <section className="mt-20">
          <h1 className="text-2xl text-center">Success Stories</h1>

          <div className="mt-10">
            <div className="flex flex-col space-x-10 bg-blue-100 lg:flex-row rounded-2xl">
              <img
                src={ryan}
                alt="Ryan"
                className="w-full shadow rounded-2xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-xl font-semibold">Ryan Nathan Wilson</h3>
                <h4 className="text-lg">Senior Software Engineer</h4>
                <p className="mt-8 text-justify">
                  "I had the pleasure of working with CardinalTalent.ai to
                  secure my first two positions as a software engineer, and I
                  cannot recommend him highly enough. CardinalTalent.ai
                  demonstrated an exceptional ability to match my strengths and
                  interests with appropriate roles, and his guidance and advice
                  throughout the process were invaluable. CardinalTalent.ai was
                  able to deftly navigate conversations between me and
                  prospective employers. During a competitive time in the
                  industry, they were able to accelerate the process and secure
                  a great offer for me. I appreciated their clear and consistent
                  communication throughout the process, and look forward to
                  collaborating with them for future roles."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 space-y-5 text-center">
          <h2 className="text-2xl">
            Gain access to top Silicon Valley companies, lifetime certification,
            and reliable income stability.{" "}
          </h2>
          <Button text="Apply as Talent" />
        </section>
      </div>

      <footer className="flex flex-col justify-between p-4 mt-10 -mx-6 -mb-6 text-xs text-white bg-blue-800 rounded-b lg:flex-row">
        <div className="order-2 mt-5 text-center lg:order-1">
          <h3>© 2025 CardinalTalent. All rights reserved. </h3>
        </div>

        <div className="order-1 space-x-2 lg:order-2">
          {footerNav.map((nav, i) => (
            <Link key={i} to={nav.href}>
              {nav.name}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}

function Form({ label, name, required = true }) {
  return (
    <>
      <Field>
        <Label className="font-semibold">
          {label}
          {required && <span className="text-red-600">*</span>}
        </Label>
        <Input
          name={name}
          type="text"
          className="mt-1 block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          required={required}
        />
      </Field>
    </>
  );
}

function Button({ text, className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "px-6 py-2 text-base font-semibold bg-blue-800 text-white border cursor-pointer rounded-lg gap-x-3 hover:bg-blue-900"
      )}
    >
      {text ?? children}
    </button>
  );
}
