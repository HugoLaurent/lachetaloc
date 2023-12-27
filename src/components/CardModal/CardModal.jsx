import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleValueModal } from "../../app/reducer/cardModalReducer";
import { toggleValue } from "../../app/reducer/openLogin";
import { fetchFollowed } from "../../app/reducer/followReducer";

export default function CardModal({
  id,
  title,
  description,
  price,
  departement,
  end_of_contract,
}) {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.modal.value);
  const isLogged = useSelector((state) => state.isLogged.isLog);
  const cancelButtonRef = useRef(null);
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");

  const followedByUser = useSelector((state) => state.follows.followed);
  const test = useSelector((state) => state.follows.followed);
  console.log(test);
  console.log(followedByUser);

  console.log(id);

  useEffect(() => {
    findFollowed();
  });

  function findFollowed() {
    const isIdPresent = followedByUser.some((follow) => follow.id === id);
    if (isIdPresent) {
      return true;
    }
    return false;
  }

  async function handleFollow() {
    const response = await fetch(
      `https://lachetaloc.onrender.com/follows/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: id }),
      }
    );
    const data = await response.json();
    if (response.status === 409) {
      setError(data.error);
      return;
    }
    dispatch(fetchFollowed());
  }

  function onClose() {
    dispatch(toggleValueModal());
    setError("");
  }

  function redirectToLogin() {
    dispatch(toggleValueModal());
    dispatch(toggleValue());
  }

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {title} - {departement} - {price}€
                      </Dialog.Title>
                      <div className="mt-2">
                        <img
                          src={`https://lachetaloc.onrender.com/public/getImage/${id}`}
                          alt=""
                        />
                        <p className="text-sm text-gray-500 pt-5">
                          {description}
                        </p>
                      </div>
                      <span className="italic text-sm">
                        Libre le {end_of_contract}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
                  {!isLogged ? (
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={redirectToLogin}
                      ref={cancelButtonRef}
                    >
                      Connectez vous pour suivre
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleFollow}
                      ref={cancelButtonRef}
                    >
                      {findFollowed() ? (
                        <span>Vous suivez cette loc ! </span>
                      ) : (
                        <span>Suivre cette loc !</span>
                      )}
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={onClose}
                  >
                    Fermer
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
