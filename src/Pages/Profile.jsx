import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../app/reducer/userReducer";
import InfoUser from "../components/InfoUser/InfoUser";

export default function Profile() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [departement, setDepartement] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  function removeEuroSymbol(price) {
    return price.replace("€", "");
  }

  useEffect(() => {
    dispatch(fetchUserInfo(localStorage.getItem("token")));
  }, [dispatch]);

  const locations = [];

  const user = useSelector((state) => state.userInfo.user);

  const accomodations = useSelector(
    (state) => state.accomodation.accomodations
  );
  const filteredAccomodations = accomodations.filter(
    (accomodation) => accomodation.user_id === user.id
  );

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://lachetaloc.onrender.com/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();

        throw new Error(errorResponse.message || "Failed to create user");
      }
    } catch (error) {
      return error;
    }
  }

  const prices = {
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

  const departements = useSelector((state) => state.location.locations);

  return (
    <>
      <div className="mt-8 mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:py-24 lg:max-w-7xl  lg:px-8">
        <InfoUser user={user} />

        {locations.length === 0 ? (
          <form onSubmit={onSubmit}>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Votre location
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Ces information seront visibles par les autres utilisateurs.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Titre
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Ex: Appartement 2 pièces"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Loyer
                </label>
                <div className="mt-2">
                  <select
                    onChange={(e) => setPrice(removeEuroSymbol(e.target.value))}
                    id="price"
                    name="price"
                    autoComplete="Loyer"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>€</option>
                    {Object.entries(prices).map(([price]) => (
                      <option key={price}>{price}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="departements"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Département
                </label>
                <div className="mt-2">
                  <select
                    id="departement"
                    name="departement"
                    autoComplete="Departement"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Département</option>
                    {departements.map((departement) => (
                      <option key={departement.id}>
                        {departement.departement}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Ecrivez une description de votre logement.
                </p>
              </div>
              <div className="col-span-full">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Téléchargez une photo de votre location</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ou drag et drop </p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">JPG</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        ) : (
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
        )}
      </div>
    </>
  );
}
