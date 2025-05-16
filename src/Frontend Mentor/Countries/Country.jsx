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
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-x-2 bg-white border border-gray-300 px-6 py-1.5 rounded-md shadow ring-2 ring-gray-200 cursor-pointer hover:scale-110 duration-500"
          >
            <ArrowLongLeftIcon className="size-6" />
            Back
          </button>

          <div className="mt-10 grid grid-cols-2 gap-x-16">
            <img
              className="aspect-3/2 w-full object-cover rounded-md"
              src={flags?.svg}
              alt={flags?.alt}
            />

            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-3xl">{name?.common}</h1>
              <div className="grid grid-cols-2 py-10">
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

                <div className="space-y-3">
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {tld}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>{" "}
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

              <div className="flex items-center gap-x-3">
                <p className="font-semibold">Border Countries:</p>
                <div className="space-x-2">
                  {borders ? (
                    Object.values(borders).map((border) => {
                      return (
                        <span
                          key={border}
                          className="px-5 border py-1 border-gray-300 shadow rounded text-xs"
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
