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
          const res = await fetch(`${BASE_URL}/all?fields=name,region,cca3,flags,population,capital`);
          const data = await res.json();
          if (res.ok) {
            localStorage.setItem("countries", JSON.stringify(data));
            setCountries(data);
            setFilteredCountries(data);
          }
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
    setFilteredCountries(countries);
    if (region === "Filter by Region") return;
    setFilteredCountries((countries) =>
      countries.filter((country) => country.region === region)
    );
  };

  return (
    <main className="px-4 py-12 bg-gray-10 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center justify-between sm:flex-row">
        <div className="relative w-full sm:w-2/5">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a country..."
            className="w-full py-3 pl-12 pr-3 drop-shadow-lg/30 bg-white rounded-lg outline-none dark:bg-slate-600  dark:text-white placeholder:text-gray-400"
          />
          <span className="absolute left-0 pl-4 top-1/4">
            <MagnifyingGlassIcon className="text-gray-400 size-6 dark:text-white" />
          </span>
        </div>

        <div className="self-end mt-2 sm:mt-0 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <Filter regions={regions} onFilter={handleFilter} />
        </div>
      </section>

      {isLoading && <Loader />}

      <section className="mt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <Link
              key={country.cca3}
              to={`${country.name.common}?code=${country.cca3}`}
              className="transition-all duration-500 outline-none hover:scale-105 hover:shadow-xl"
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
