import { useState } from "react";

import SearchBarDate from "../components/Recherche/SearchBarDate";
import SearchBarLocalisation from "../components/Recherche/SearchBarLocalisation";
import SearchBarPrices from "../components/Recherche/SearchBarPrices";
import { useSelector, useDispatch } from "react-redux";
import CardModal from "../components/CardModal/CardModal";
import { toggleValueModal } from "../app/reducer/cardModalReducer";
import AccomodationCard from "../components/AccomodationCard/AccomodationCard";

function Recherche() {
  const dispatch = useDispatch();
  const accomodations = useSelector(
    (state) => state.accomodation.accomodations
  );

  const locations = useSelector((state) => state.location.locations);

  const [selectedDepartement, setSelectedDepartement] =
    useState("Localisation");
  const [selectedPrice, setSelectedPrice] = useState(
    "Sélectionnez un prix max"
  );
  const [selectedDate, setSelectedDate] = useState(null);

  const [filteredLocations, setFilteredLocations] = useState([]);

  const [idCard, setIdCard] = useState("");
  const [titleCard, setTitleCard] = useState("");
  const [descriptionCard, setDescriptionCard] = useState("");
  const [priceCard, setPriceCard] = useState("");
  const [departementCard, setDepartementCard] = useState("");
  const [imageCard, setImageCard] = useState("");
  const [endCard, setEndCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filtrer les locations en fonction des paramètres sélectionnés
    const resultFilter = accomodations.filter((accomodation) => {
      const departementMatch =
        selectedDepartement === "Localisation" ||
        accomodation.location.departement === selectedDepartement;

      const priceMatch =
        selectedPrice === "Sélectionnez un prix max" ||
        accomodation.price <= parseInt(selectedPrice);

      const dateMatch =
        !selectedDate || new Date(accomodation.end_of_contract) >= selectedDate;

      // Vous pouvez ajuster cette condition en fonction de vos besoins

      return departementMatch && priceMatch && dateMatch;
    });

    setFilteredLocations(resultFilter);
  };

  function handleReset() {
    setSelectedDepartement("Localisation");
    setSelectedPrice("Sélectionnez un prix max");
    setSelectedDate(null);
    setFilteredLocations([]);
  }

  function handleModal(id, title, description, price, departement, image, end) {
    dispatch(toggleValueModal());
    setIdCard(id);
    setTitleCard(title);
    setDescriptionCard(description);
    setPriceCard(price);
    setDepartementCard(departement);
    setImageCard(image);
    setEndCard(end);
  }

  return (
    <>
      <CardModal
        id={idCard}
        title={titleCard}
        description={descriptionCard}
        price={priceCard}
        departement={departementCard}
        image={imageCard}
        end_of_contract={endCard}
      />
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
                  existingDepartement={locations}
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
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="rounded-md bg-[#0f5cd6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000"
                  >
                    Mettre à zéro
                  </button>
                </div>
              </article>
            </section>
          </form>
          <section className="flex justify-around gap-5 flex-wrap">
            {filteredLocations?.length === 0 ? (
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">Aucun résultat</h3>
                </div>
              </div>
            ) : (
              filteredLocations?.map((location) => (
                <article
                  className="cursor-pointer"
                  onClick={() =>
                    handleModal(
                      location.id,
                      location.title,
                      location.description,
                      location.price,
                      location.location.departement,
                      location.image,
                      location.end_of_contract
                    )
                  }
                  key={location.id}
                >
                  <AccomodationCard
                    id={location.id}
                    title={location.title}
                    description={location.description}
                    location_id={location.location_id}
                    price={location.price}
                    departement={location.location.departement}
                  />
                </article>
              ))
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Recherche;
