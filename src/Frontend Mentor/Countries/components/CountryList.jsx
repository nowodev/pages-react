function CountryList({ flag, name, population, region, capital }) {
  return (
    <div className="bg-white rounded-md dark:bg-slate-700 dark:text-white drop-shadow-lg/40">
      <img
        src={flag.svg}
        alt={flag.alt}
        className="block object-cover w-full aspect-3/2 rounded-t-md "
      />
      <div className="px-4 py-5 text-sm">
        <h1 className="mb-2 text-lg font-semibold">{name.common}</h1>
        <p><span className="font-medium">Population:</span> {population.toLocaleString()}</p>
        <p><span className="font-medium">Region:</span> {region}</p>
        <p><span className="font-medium">Capital:</span> {capital}</p>
      </div>
    </div>
  );
}

export default CountryList;
