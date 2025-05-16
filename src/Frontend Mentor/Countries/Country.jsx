import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Nav from "./components/Nav";

function Country() {
  const [country, setCountry] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  const BASE_URL = "https://restcountries.com/v3.1";

  useEffect(() => {
    async function fetchCountry() {
      try {
        // setIsLoading(true);
        const res = await fetch(`${BASE_URL}/alpha/${code}`);
        const data = await res.json();
        setCountry(...data);
      } catch (error) {
        console.log("There was an error fetching data....");
      } finally {
        // setIsLoading(false);
      }
    }

    fetchCountry();
  }, [code]);
  console.log(country);
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
    <div className="bggray-900 min-h-screen bg-gray-100">
      <Nav />

      <section className="bg-gray-10 px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-white border border-gray-300 px-6 py-1.5 rounded-md shadow-2xl cursor-pointer hover:scale-110 duration-500"
        >
          &larr; Back
        </button>

        <div className="mt-10 grid grid-cols-2 gap-x-10">
          <img
            className="aspect-video w-full"
            src={flags?.svg}
            alt={flags?.alt}
          />

          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl">{name?.common}</h1>
            <div className="grid grid-cols-2 mt-5">
              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {name?.nativeName?.eng?.common}
                </p>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {population?.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span> {region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span> {subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital:</span> {capital}
                </p>
              </div>

              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Top Level Domain:</span> {tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {JSON.stringify(currencies)}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {JSON.stringify(languages)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-10">
              <p className="font-semibold">Border Countries:</p>
              <div>
                {/* {borders.map((border) => {
                border
                })} */}
                <span className="px-5 border py-1 border-gray-300 shadow rounded text-xs">
                  {borders}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Country;
