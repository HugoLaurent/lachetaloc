import { useState } from "react";
import check from "../assets/images/icons/check.png";
import locations from "../assets/data/fakeHouse";

export default function Profile() {
  const [toModify, setToModify] = useState(false);
  return (
    <div className="mt-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Votre profil
      </h2>
      <div className="my-8 flex flex-col gap-5">
        <p className="text-sm flex gap-2 text-gray-500">
          Pseudo :
          {toModify === true ? (
            <>
              <input
                className="border-1 shadow-md  border-black"
                type="text"
                name=""
                id=""
                placeholder="Flicktupue"
              />
              <img className="w-5" src={check} />
            </>
          ) : (
            <span className="text-black">Flicktupue</span>
          )}{" "}
        </p>

        <p className="text-sm flex gap-2 text-gray-500">
          Nom :
          {toModify === true ? (
            <>
              <input
                className="rounded shadow-md  border-black"
                type="text"
                name=""
                id=""
                placeholder="John"
              />
              <img className="w-5" src={check} />
            </>
          ) : (
            <span className="text-black">John</span>
          )}{" "}
        </p>

        <p className="text-sm flex gap-2 text-gray-500">
          Prénom :
          {toModify === true ? (
            <>
              <input
                className="border-1 shadow-md  border-black"
                type="text"
                name=""
                id=""
                placeholder="Doe"
              />
              <img className="w-5" src={check} />
            </>
          ) : (
            <span className="text-black">Doe</span>
          )}{" "}
        </p>

        <p className="text-sm flex gap-2 text-gray-500">
          Email :
          {toModify === true ? (
            <>
              <input
                className="border-1 shadow-md  border-black"
                type="text"
                name=""
                id=""
                placeholder="emailmoithis@gmail.com"
              />
              <img className="w-5" src={check} />
            </>
          ) : (
            <span className="text-black">emailmoithis@gmail.com</span>
          )}
        </p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Votre location
      </h2>
      <div
        key={locations[0].id}
        className="border p-2 flex gap-4  justify-center items-center w-full"
      >
        <div className="container aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
          <img
            src={locations[0].imageSrc}
            alt={locations[0].imageAlt}
            className="relative h-full w-full object-cover object-center lg:h-full lg:w-full "
          />
        </div>
        <div className="mt-4 flex flex-col justify-around">
          <div>
            <h3 className="text-sm text-gray-700">{locations[0].titre}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {locations[0].localisation}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Fin du bail le {locations[0].finBail}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {locations[0].loyerMensuel}
          </p>
          <p className="text-black">{locations[0].description}</p>
        </div>
      </div>
      <div className="sm:w-1/4 w-full"></div>

      <div className="flex mt-4 gap-3">
        <button
          onClick={() => setToModify(!toModify)}
          className="rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000"
        >
          Modifier
        </button>
        <button className="rounded-md bg-[#0f5cd6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
          Supprimer
        </button>
      </div>
    </div>
  );
}