import { NavLink } from "react-router-dom";
import { toggleValue } from "../../app/reducer/openLogin";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { changeStatus } from "../../app/reducer/loginStatusReducer";
import LogIn from "../Registration/LogIn";
import SignIn from "../Registration/SignIn";

import logoNoText from "./../../assets/images/logo/logo-sans-texte.png";
import notification from "./../../assets/images/icons/notification.png";

export default function Header({ logo }) {
  const navigation = [
    { name: "Les location", link: "/" },
    { name: "Mon suivi", link: "/mon-suivi" },
    { name: "Recherche", link: "/recherche" },
  ];

  const [switchRegistration, setSwitchRegistration] = useState(false);
  const dispatch = useDispatch();
  const openLogin = useSelector((state) => state.openLogin.value);
  const isLogged = useSelector((state) => state.isLogged.isLog);
  console.log(isLogged);

  const handleLoginClick = () => {
    dispatch(toggleValue());
  };

  const handleDisconnect = () => {
    dispatch(changeStatus());
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  return (
    <>
      <div className="bg-[#374151] py-5 ">
        <section className="flex justify-around items-center">
          <nav className="flex items-center gap-2">
            <img className="w-[200px]" src={logo} alt="" />
            <ul className="gap-2 hidden lg:flex">
              {navigation.map((item) => (
                <li key={item.link} className="w-[150px]">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md  px-3 box-content py-2 text-lg font-medium bg-gray-900 text-white"
                        : "rounded-md  px-3 box-content py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="flex w-fit gap-4">
            {!isLogged ? (
              <button
                onClick={handleLoginClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Se connecter
              </button>
            ) : (
              <button
                onClick={handleDisconnect}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Se déconnecter
              </button>
            )}
            <img className="w-8" src={logoNoText} alt="" />
            <img className="w-8" src={notification} alt="" />
          </nav>
        </section>
        <ul className="gap-2 flex lg:hidden justify-center pt-4">
          {navigation.map((item) => (
            <li key={item.link} className="w-[150px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-md  px-3 box-content py-2 text-lg font-medium bg-gray-900 text-white"
                    : "rounded-md  px-3 box-content py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Transition.Root show={openLogin} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleValue}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={handleLoginClick}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6"></div>
                      <div
                        className={`relative transition-all ease-in-out align-center gap-5 flex mt-6 flex-1 px-4 sm:px-6 ${
                          switchRegistration ? "-translate-x-[89%]" : ""
                        }`}
                      >
                        <LogIn
                          switchRegistration={switchRegistration}
                          setSwitchRegistration={setSwitchRegistration}
                        />
                        <SignIn
                          switchRegistration={switchRegistration}
                          setSwitchRegistration={setSwitchRegistration}
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
