import "./LatestLoc.css";

import { useSelector } from "react-redux";
import AccomodationCard from "../AccomodationCard/AccomodationCard";

export default function LatestLoc() {
  const accomodations = useSelector(
    (state) => state.accomodation.accomodations
  );
  const latestAccomodation = accomodations.slice(-8);

  return (
    <div className="bg-white border">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Les dernières lachées
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {latestAccomodation.length > 0 &&
            latestAccomodation.map((location) => (
              <AccomodationCard
                key={location.id}
                id={location.id}
                title={location.title}
                description={location.description}
                location_id={location.location_id}
                price={location.price}
                departement={location.location.departement}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
