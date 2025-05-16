import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

function Filter({ regions, onFilter }) {
  const [selected, setSelected] = useState(regions.at(0));

  function handleFilter(region) {
    setSelected(region);
    onFilter(region);
  }

  return (
    <div>
      <Listbox value={selected} onChange={handleFilter}>
        <ListboxButton
          className={clsx(
            "relative block w-full bg-white cursor-pointer shadow rounded-lg py-3 pr-8 pl-3 text-left text-sm/6 border border-gray-200",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selected}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {regions.map((region) => (
            <ListboxOption
              key={region}
              value={region}
              className="group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100 cursor-pointer"
            >
              <div className="text-sm/6">{region}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}

export default Filter;
