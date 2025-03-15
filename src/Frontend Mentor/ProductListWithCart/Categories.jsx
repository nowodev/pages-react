import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export default function Categories({ categories, onCategory }) {
  const [selected, setSelected] = useState(categories[0]);

  function handleChange(value) {
    setSelected(value);
    onCategory(value);
  }

  return (
    <div className="w-38 md:w-52">
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            "relative block w-full bg-white cursor-pointer rounded-md py-1.5 pr-8 pl-3 text-left text-sm/6 border border-amber-500",
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
          {categories.map((category) => (
            <ListboxOption
              key={category}
              value={category}
              className="group flex items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-amber-100 cursor-pointer"
            >
              <div className="text-sm/6">{category}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
