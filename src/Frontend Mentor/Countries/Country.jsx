import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import Loader from "./components/Loader";

function Country() {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  const BASE_URL = "https://restcountries.com/v3.1";

  useEffect(() => {
    async function fetchCountry() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/alpha/${code}`);
        const data = await res.json();
        setCountry(...data);
      } catch (error) {
        console.log("There was an error fetching data....");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountry();
  }, [code]);

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex dark:bg-slate-600 dark:text-white items-center gap-x-2 bg-white px-6 py-1.5 rounded-md drop-shadow-md/40 dropshadow-cyan-500 cursor-pointer hover:scale-110 duration-500"
          >
            <ArrowLongLeftIcon className="size-6" />
            Back
          </button>

          <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 gap-x-16 dark:text-white">
            <img
              className="object-cover w-full rounded-md aspect-3/2"
              src={flags?.svg}
              alt={flags?.alt}
            />

            <div className="flex flex-col justify-center mt-10 tracking-wide lg:mt-0">
              <h1 className="text-3xl font-bold">{name?.common}</h1>
              <div className="grid grid-cols-1 py-10 lg:grid-cols-2">
                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Official Name:</span>{" "}
                    {name?.official}
                  </p>
                  <p>
                    <span className="font-semibold">Population:</span>{" "}
                    {population?.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span> {region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span> {capital}
                  </p>
                </div>

                <div className="mt-10 space-y-3 lg:mt-0">
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {tld}
                  </p>
                  <p>
                    <span className="font-bold">Currencies:</span>{" "}
                    {Object.values(currencies)
                      .map(({ name }) => name)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span>{" "}
                    {Object.values(languages).join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-x-3">
                <p className="font-semibold">Border Countries:</p>
                <div className="flex flex-wrap gap-2 mt-5 lg:mt-">
                  {borders ? (
                    Object.values(borders).map((border) => {
                      return (
                        <span
                          key={border}
                          className="px-5 py-1 text-xs bg-white rounded drop-shadow-md dark:bg-slate-600"
                        >
                          {border}
                        </span>
                      );
                    })
                  ) : (
                    <p>No border countries</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Country;
