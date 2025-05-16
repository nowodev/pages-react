import Filter from "./components/Filter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import data from "./data.json";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "./components/Loader";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const regions = [...new Set(countries.map((c) => c.region))];
  regions.unshift("Filter by Region");

  const BASE_URL = "https://restcountries.com/v3.1";

  useEffect(() => {
    const storedCountries = localStorage.getItem("countries");
    if (storedCountries) {
      setCountries(JSON.parse(storedCountries));
      setFilteredCountries(JSON.parse(storedCountries));
    } else {
      async function fetchCountries() {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/all`);
          const data = await res.json();
          localStorage.setItem("countries", JSON.stringify(data));
          setCountries(data);
          setFilteredCountries(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCountries();
    }
  }, []);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    if (searchTerm.length < 3) return setFilteredCountries([...countries]);

    const searchRegex = new RegExp(searchTerm, "gi");
    return setFilteredCountries(
      countries.filter(({ name }) => searchRegex.test(name.common))
    );
  };

  const handleFilter = (region) => {
    if (region === "Filter by Region") return setFilteredCountries(countries);
    setFilteredCountries((countries) =>
      countries.filter((country) => country.region === region)
    );
  };

  return (
    <main className="bg-gray-10 px-4 sm:px-6 lg:px-8 py-12">
      <section className="flex items-center justify-between flex-row">
        <div className="relative w-2/5">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a country..."
            className="w-full rounded-lg bg-white border border-gray-200 shadow py-3 pl-12 pr-3"
          />
          <span className="absolute left-0 top-1/4 pl-4">
            <MagnifyingGlassIcon className="size-6 text-gray-400" />
          </span>
        </div>

        <div className="w-1/5">
          <Filter regions={regions} onFilter={handleFilter} />
        </div>
      </section>

      {isLoading && <Loader />}

      <section className="mt-10">
        <div className="grid grid-cols-4 gap-5">
          {filteredCountries.map((country) => (
            <Link
              key={country.cca3}
              to={`${country.name.common}?code=${country.cca3}`}
              className="hover:scale-105 transition-all hover:shadow-xl duration-500"
            >
              <CountryList
                key={country.name}
                flag={country.flags}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Countries;
