import "./LatestLoc.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccomodationCard from "../AccomodationCard/AccomodationCard";
import CardModal from "../CardModal/CardModal";
import { toggleValueModal } from "../../app/reducer/cardModalReducer";

export default function LatestLoc() {
  const dispatch = useDispatch();

  const [idCard, setIdCard] = useState("");
  const [titleCard, setTitleCard] = useState("");
  const [descriptionCard, setDescriptionCard] = useState("");
  const [priceCard, setPriceCard] = useState("");
  const [departementCard, setDepartementCard] = useState("");
  const [imageCard, setImageCard] = useState("");
  const [endCard, setEndCard] = useState("");

  const accomodations = useSelector(
    (state) => state.accomodation.accomodations
  );
  const latestAccomodation = accomodations.slice(-8);

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
    <div className="bg-white border">
      <CardModal
        id={idCard}
        title={titleCard}
        description={descriptionCard}
        price={priceCard}
        departement={departementCard}
        image={imageCard}
        end_of_contract={endCard}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Les dernières lachées
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {latestAccomodation.length > 0 &&
            latestAccomodation.map((location) => (
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
            ))}
        </div>
      </div>
    </div>
  );
}
