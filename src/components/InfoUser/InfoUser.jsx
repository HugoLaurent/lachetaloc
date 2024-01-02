import { useState } from "react";
import check from "../../assets/images/icons/check.png";

function InfoUser({ user }) {
  const [toModify, setToModify] = useState(false);

  return (
    <div className="my-8 flex flex-col gap-5">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Votre profil
      </h2>
      <p className="text-sm flex gap-2 text-gray-500">
        Pseudo :
        {toModify === true ? (
          <>
            <input
              className="border-1 shadow-md  border-black"
              type="text"
              placeholder="Changer votre pseudo"
            />
            <img className="w-5" src={check} />
          </>
        ) : (
          <span className="text-black">{user.pseudo}</span>
        )}{" "}
      </p>

      <p className="text-sm flex gap-2 text-gray-500">
        Email :
        {toModify === true ? (
          <>
            <input
              className="border-1 shadow-md  border-black"
              type="email"
              placeholder="Changez votre email"
            />
            <img className="w-5" src={check} />
          </>
        ) : (
          <span className="text-black">{user.email}</span>
        )}
      </p>

      <p className="text-sm flex gap-2 text-gray-500">
        Mot de passe :
        {toModify === true ? (
          <>
            <input
              className="border-1 shadow-md  border-black"
              type="password"
              placeholder="Changez votre mot de passe"
            />
            <img className="w-5" src={check} />
          </>
        ) : (
          <span className="text-black">**********</span>
        )}
      </p>
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

export default InfoUser;
