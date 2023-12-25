import { useEffect, useState } from "react";

import SearchBarDate from "../components/Recherche/SearchBarDate";
import SearchBarLocalisation from "../components/Recherche/SearchBarLocalisation";
import SearchBarPrices from "../components/Recherche/SearchBarPrices";
import { useSelector } from "react-redux";

function Recherche() {
  const locations = useSelector((state) => state.accomodation.accomodations);

  const [selectedDepartement, setSelectedDepartement] =
    useState("Localisation");
  const [selectedPrice, setSelectedPrice] = useState(
    "Sélectionnez un prix max"
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [existingDepartement, setExistingDepartement] = useState([]);

  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filtrer les locations en fonction des paramètres sélectionnés
    const filteredLocations = locations.filter((location) => {
      const departementMatch =
        selectedDepartement === "Localisation" ||
        location.location.departement === selectedDepartement;

      const priceMatch =
        selectedPrice === "Sélectionnez un prix max" ||
        location.price <= parseInt(selectedPrice);

      const dateMatch =
        !selectedDate || new Date(location.date) <= selectedDate;

      // Vous pouvez ajuster cette condition en fonction de vos besoins

      return departementMatch && priceMatch && dateMatch;
    });

    setFilteredLocations(filteredLocations);
  };

  useEffect(() => {
    for (let index = 0; index < locations.length; index++) {
      setExistingDepartement((prevState) => [
        ...prevState,
        locations[index].location,
      ]);
    }
  }, [locations]);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-5 max-w-2xl lg:mx-0"
        >
          <h2 className="text-3xl mb-3 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rechercher{" "}
          </h2>
          <section className="w-4/5">
            <article className="flex flex-col gap-4">
              <SearchBarLocalisation
                selectedDepartement={selectedDepartement}
                setSelectedDepartement={setSelectedDepartement}
                existingDepartement={existingDepartement}
              />
              <SearchBarPrices
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
              />
              <div className="flex z-30 justify-between">
                <SearchBarDate
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>

              <div className="flex mt-4 gap-3">
                <button
                  formAction="submit"
                  className="rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000"
                >
                  Rechercher
                </button>
                <button className="rounded-md bg-[#0f5cd6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
                  Mettre à zéro
                </button>
              </div>
            </article>
          </section>
        </form>
        <section className="flex justify-around gap-5 flex-wrap">
          {filteredLocations?.map((location) => (
            <div
              key={location.id}
              className=" max-w-[500px] min-w-[500px] relative"
            >
              <div className="container aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={`https://lachetaloc.onrender.com/public/getImage/${location.id}`}
                  alt={location.imageAlt}
                  className="relative h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
                <div className="overlay z-10 ">
                  <p className="text">
                    {location.description}
                    <button className="rounded-md mt-3 bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
                      Demander le contact
                    </button>
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.title}{" "}
                    </a>
                  </h3>
                  <span className="text-sm italic">
                    {location.end_of_contract}
                  </span>
                  <p className="mt-1 text-sm text-gray-500">
                    {location.localisation}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {location.price} €
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Recherche;
