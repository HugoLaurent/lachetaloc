import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Importez vos données de départements
const prices = {
  "100€": 100,
  "200€": 200,
  "300€": 300,
  "400€": 400,
  "500€": 500,
  "600€": 600,
  "700€": 700,
  "800€": 800,
  "900€": 900,
  "1000€": 1000,
  "1100€": 1100,
  "1200€": 1200,
  "1300€": 1300,
  "1400€": 1400,
  "1500€": 1500,
  "1600€": 1600,
  "1700€": 1700,
  "1800€": 1800,
  "1900€": 1900,
  "2000€": 2000,
  "2100€": 2100,
  "2200€": 2200,
  "2300€": 2300,
  "2400€": 2400,
  "2500€": 2500,
  "2600€": 2600,
  "2700€": 2700,
  "2800€": 2800,
  "2900€": 2900,
  "3000€": 3000,
  "3100€": 3100,
  "3200€": 3200,
  "3300€": 3300,
  "3400€": 3400,
  "3500€": 3500,
  "3600€": 3600,
  "3700€": 3700,
  "3800€": 3800,
  "3900€": 3900,
  "4000€": 4000,
  "4100€": 4100,
  "4200€": 4200,
  "4300€": 4300,
  "4400€": 4400,
  "4500€": 4500,
  "4600€": 4600,
  "4700€": 4700,
  "4800€": 4800,
  "4900€": 4900,
  "5000€": 5000,
};

export default function SearchBarLocalisation({
  setSelectedPrice,
  selectedPrice,
}) {
  const handlePriceSelect = (region) => {
    setSelectedPrice(region);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span>{selectedPrice}</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 h-72 overflow-scroll">
            {Object.entries(prices).map(([price]) => (
              <div key={price}>
                <Menu.Item>
                  <div
                    onClick={() => handlePriceSelect(price)}
                    className="text-gray-700 font-semibold px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {price}
                  </div>
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
