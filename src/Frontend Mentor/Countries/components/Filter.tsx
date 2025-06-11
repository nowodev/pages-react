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
            "relative block w-full bg-white dark:bg-slate-600 dark:text-white cursor-pointer shadow rounded-lg py-3 pr-8 pl-3 text-left text-sm/6 drop-shadow-lg/40",
            "focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          )}
        >
          {selected}
          <ChevronDownIcon
            className="absolute pointer-events-none group top-4 right-3 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-(--button-width) mt-0.5 rounded-lg dark:bg-slate-600 dark:text-white drop-shadow-lg/30 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none",
            "transition duration-100 ease-in data-leave:data-closed:opacity-0"
          )}
        >
          {regions.map((region) => (
            <ListboxOption
              key={region}
              value={region}
              className="group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-focus:bg-gray-100 dark:data-focus:bg-gray-700 cursor-pointer"
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
