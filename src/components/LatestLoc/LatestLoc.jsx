import "./LatestLoc.css";

import locations from "../../assets/data/fakeHouse";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function LatestLoc() {
  return (
    <div className="bg-white border">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Les dernières lachées
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locations.map((location) => (
            <div key={location.id} className=" relative">
              <div className="container aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={location.imageSrc}
                  alt={location.imageAlt}
                  className="relative h-full w-full object-cover object-center lg:h-full lg:w-full "
                />
                <div className="overlay z-10 ">
                  <p className="text">{location.description}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={location.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {location.titre}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {location.localisation}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {location.loyerMensuel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
