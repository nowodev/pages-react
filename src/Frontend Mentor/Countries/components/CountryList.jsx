function CountryList({ flag, name, population, region, capital }) {
  return (
    <div className="rounded-md bg-white shadow">
      <img
        src={flag.svg}
        alt={flag.alt}
        className="object-cover block w-full aspect-[2/1] rounded-t-md "
      />
      <div className="py-5 px-4 text-sm">
        <h1 className="font-semibold mb-2 text-lg">{name.common}</h1>
        <p><span className="font-medium">Population:</span> {population.toLocaleString()}</p>
        <p><span className="font-medium">Region:</span> {region}</p>
        <p><span className="font-medium">Capital:</span> {capital}</p>
      </div>
    </div>
  );
}

export default CountryList;
