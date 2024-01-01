import { useEffect, useState } from "react";
import check from "../assets/images/icons/check.png";
import locations from "../assets/data/fakeHouse";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../app/reducer/userReducer";

export default function Profile() {
  const dispatch = useDispatch();
  const [toModify, setToModify] = useState(false);

  useEffect(() => {
    dispatch(fetchUserInfo(localStorage.getItem("token")));
  }, [dispatch]);

  const user = useSelector((state) => state.userInfo.user);

  const accomodations = useSelector(
    (state) => state.accomodation.accomodations
  );
  console.log(accomodations);
  const filteredAccomodations = accomodations.filter(
    (accomodation) => accomodation.user_id === user.id
  );
  console.log(filteredAccomodations);

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
            <h3 className="text-sm text-gray-700">
              {filteredAccomodations.title}
            </h3>
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
