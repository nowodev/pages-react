import cardin from "./assets/cardin.png";
import circle from "./assets/circle.png";
import chat from "./assets/chat.png";
import clsx from "clsx";
import { MainButton } from "./Button";
import FolksCarousel from "./FolksCarousel";
import dan from "./assets/dan.png";
import susan from "./assets/susan.png";
import han from "./assets/han.png";

const OPTIONS = { dragFree: true, loop: true };
const SLIDES = [
  {
    image: dan,
    name: "Dan Smith",
    title: "Software Engineer",
  },
  {
    image: susan,
    name: "Susan Lee",
    title: "Product Manager",
  },
  {
    image: han,
    name: "Han Zhang",
    title: "Data Scientist",
  },
  {
    image: susan,
    name: "Susan Lee",
    title: "Product Manager",
  },
  {
    image: dan,
    name: "Dan Smith",
    title: "Software Engineer",
  },
];

export default function CardinalAIPowerNetworker() {
  return (
    <div className="bg-gray-50">
      <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
        <section className="text-center">
          <h3 className="text-4xl font-semibold tracking-wide">
            I’ll connect you to the best people in my network,
          </h3>
          <p className="text-2xl tracking-wide">
            and I’ll reward you for your connections!
          </p>
        </section>

        <section className="relative text-white">
          <div className="w-full bg-gray-800">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
              <div className="z-20 flex flex-col justify-center h-full">
                <h1 className="text-2xl text-center">
                  Tell me more about you and I’ll give you a call!
                </h1>

                <form className="mt-10 max-w-2xl mx-auto w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CustomLabel label="First Name" id="first_name" />
                      <CustomInput
                        type="text"
                        name="first_name"
                        id="first_name"
                      />
                    </div>
                    <div>
                      <CustomLabel label="Last Name" id="last_name" />
                      <CustomInput
                        type="text"
                        name="last_name"
                        id="last_name"
                      />
                    </div>
                    <div>
                      <CustomLabel label="Email Address" id="email" />
                      <CustomInput type="email" name="email" id="email" />
                    </div>
                    <div>
                      <CustomLabel label="Phone Number" id="phone" />
                      <CustomInput type="number" name="phone" id="phone" />
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-10 gap-x-5">
                    <div className="px-3 py-2 text-xs text-center bg-red-700 rounded-md w-fit">
                      Upload your resume <br />
                      and lets chat!
                    </div>

                    <div>
                      <p className="text-xs">Upload your Resume</p>
                      <div className="mt-1">
                        <input
                          type="file"
                          class="block w-full text-sm file:mr-4 file:rounded file:border-0 file:bg-white file:py-0.5 file:px-2 file:text-sm file:text-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-5">
                    <MainButton
                      text="Submit"
                      className="w-1/2 border-none font-light!"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div>
              <img
                src={cardin}
                className="absolute bottom-0 right-0 h-80"
                alt="Cardin"
              />
            </div>
          </div>
        </section>

        <section className="flex space-x-10 text-center mx-auto w-fit">
          <div className="flex justify-center items-center p-4 h-40 w-60 bg-blue-100 rounded-lg shadow-md font-medium text-2xl">
            30k+ <br />
            Meetings
          </div>
          <div className="flex justify-center items-center p-4 h-40 w-60 bg-blue-100 rounded-lg shadow-md font-medium text-2xl">
            1K+ <br />
            Placements
          </div>
          <div className="flex justify-center items-center p-4 h-40 w-60 bg-blue-100 rounded-lg shadow-md font-medium text-2xl">
            $1M+ <br />
            Open Rewards!
          </div>
        </section>

        <section className="mx-auto w-fit">
          <h1 className="mb-3 text-4xl text-center font-semibold text-red-500">
            Get rewarded for your connections
          </h1>

          <div className="flex items-center justify-center space-x-10 mt-10">
            <div className="flex flex-col p-4 bg-blue-100 rounded-lg shadow-md space-y-3 max-w-60">
              <img src={circle} className="size-10" />
              <p className="text-xl">$25/Interview</p>
              <p className="text-base">
                Gain access to exclusive networking opportunities that fit your
                unique goals.
              </p>
            </div>
            <div className="flex flex-col p-4 bg-blue-100 rounded-lg shadow-md space-y-3 max-w-60">
              <img src={chat} className="size-10" />
              <p className="text-xl">Referral Bonuses</p>
              <p className="text-base">
                Gain access to exclusGain access to exclusive networking
                opportunities that fit your unique goals.ive networking
                opportunities that fit your unique goals.
              </p>
            </div>
            <div className="flex flex-col p-4 bg-blue-100 rounded-lg shadow-md space-y-3 max-w-60">
              <img src={circle} className="size-10" />
              <p className="text-xl">Revenue Share</p>
              <p className="text-base">
                Gain access to exclusive networking opportunities that fit your
                unique goals.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="mb-3 text-4xl text-center font-semibold text-red-500">
            Meet the awesome folks already on the network!
          </h1>
          <FolksCarousel slides={SLIDES} options={OPTIONS} />
        </section>
      </div>
    </div>
  );
}

function CustomLabel({ label, id }) {
  return (
    <label htmlFor={id} className="block font-medium text-white text-sm/6">
      {label}
    </label>
  );
}

function CustomInput({ type = "text", name, id, placeholder, className }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={clsx(
        className,
        "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      )}
      placeholder={placeholder}
    />
  );
}
