import { NavLink, useNavigate } from "react-router-dom";
import { toggleValue } from "../../app/reducer/openLogin";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { changeStatus } from "../../app/reducer/loginStatusReducer";
import { toggleAlertModal } from "../../app/reducer/loginAlertReducer";
import LogIn from "../Registration/LogIn";
import SignIn from "../Registration/SignIn";

import notification from "./../../assets/images/icons/notification.png";
import { userLogout } from "../../app/reducer/userReducer";
import { followLogout, resetState } from "../../app/reducer/followReducer";

export default function Header({ logo }) {
  const navigation = [
    { name: "Locations", link: "/" },
    { name: "Mon suivi", link: "/mon-suivi" },
    { name: "Recherche", link: "/recherche" },
  ];

  const navigate = useNavigate();

  const [switchRegistration, setSwitchRegistration] = useState(false);
  const dispatch = useDispatch();
  const openLogin = useSelector((state) => state.openLogin.value);
  const isLogged = useSelector((state) => state.isLogged.isLog);
  const displayAlert = useSelector((state) => state.loginAlert.value);

  const handleLoginClick = () => {
    dispatch(toggleValue());
  };

  function handleDisconnect() {
    dispatch(changeStatus());
    dispatch(userLogout());
    dispatch(followLogout());

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
  }

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (displayAlert) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        dispatch(toggleAlertModal(false));
      }, 5000);
    }
  }, [dispatch, displayAlert]);

  const [showDisconnect, setShowDisconnect] = useState(false);

  useEffect(() => {
    if (!isLogged) {
      setShowDisconnect(true);
      setTimeout(() => {
        setShowDisconnect(false);
      }, 5000);
    }
  }, [isLogged]);

  return (
    <>
      <div className="bg-[#374151] py-5 ">
        <section className="flex justify-around items-center">
          <nav className="flex items-center w-full justify-between mx-5 gap-2">
            <img className="lg:w-[250px] w-40" src={logo} alt="" />
            <ul className="hidden w-fit lg:flex">
              {navigation.map((item) => (
                <li key={item.link} className="w-[150px]">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md pointer-events-none cursor-not-allowed px-3 box-content py-2 text-lg font-medium bg-gray-900 text-white"
                        : "rounded-md  px-3 box-content py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              {isLogged && (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-md  px-3 box-content py-2 text-lg font-medium bg-gray-900 text-white"
                        : "rounded-md  px-3 box-content py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                    to={"/profile"}
                  >
                    Mon profil
                  </NavLink>
                </li>
              )}
            </ul>
            <nav className="flex w-[170px] justify-around">
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

              <img className="w-8 h-8" src={notification} alt="" />
            </nav>
          </nav>
        </section>
        <ul className="gap-2 flex lg:hidden justify-center pt-4">
          {navigation.map((item) => (
            <li key={item.link} className="w-[150px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-md  px-3 box-content py-2 text-sm font-medium bg-gray-900 text-white"
                    : "rounded-md  px-3 box-content py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {isLogged && (
            <li className="w-[150px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-md  px-3 box-content py-2 text-sm font-medium bg-gray-900 text-white"
                    : "rounded-md  px-3 box-content py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
                to={"/profile"}
              >
                Mon profil
              </NavLink>
            </li>
          )}
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

      <div
        className={`transition-all flex justify-center duration-1000 ease-in-out text-white bg-green-600  ${
          showAlert ? "h-12" : "h-0"
        }`}
      >
        <p>Vous êtes connecté</p>
      </div>
      <div
        className={`transition-all flex justify-center duration-1000 ease-in-out text-white bg-red-600  ${
          showDisconnect ? "h-12" : "h-0"
        }`}
      >
        <p>Vous êtes déconnecté</p>
      </div>
    </>
  );
}
