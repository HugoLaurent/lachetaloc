import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const rooms = {
  "1 piece": 1,
  "2 pieces": 2,
  "3 pieces": 3,
  "4 pieces": 4,
  "5 pieces": 5,
  "6 pieces": 6,
  "7 pieces": 7,
  "8 pieces": 8,
  "9 pieces": 9,
  "10 pieces": 10,
};

export default function SearchBarDate() {
  const [selectedRoom, setSelectedRoom] = useState("Nombre de pièces");

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <span>{selectedRoom}</span>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.entries(rooms).map(([room]) => (
              <div key={room}>
                <Menu.Item>
                  <div
                    onClick={() => handleRoomChange(room)}
                    className="text-gray-700 font-semibold px-4 py-2 cursor-pointer"
                  >
                    {room}
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
