import SearchBarDate from "../components/Recherche/SearchBarDate";
import SearchBarLocalisation from "../components/Recherche/SearchBarLocalisation";
import SearchBarPrices from "../components/Recherche/SearchBarPrices";
import SearchBarRoom from "../components/Recherche/SearchBarRoom";

import locations from "../assets/data/fakeHouse";

function Recherche() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-5 max-w-2xl lg:mx-0">
          <h2 className="text-3xl mb-3 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mon suivi
          </h2>
          <section className="w-4/5">
            <article className="flex flex-col gap-4">
              <SearchBarLocalisation />
              <SearchBarPrices />
              <div className="flex justify-between">
                <SearchBarDate />
                <SearchBarRoom />
              </div>

              <div className="flex mt-4 gap-3">
                <button className="rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
                  Rechercher
                </button>
                <button className="rounded-md bg-[#0f5cd6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
                  Mettre à zéro
                </button>
              </div>
            </article>
          </section>
        </div>
        <section className="flex justify-around gap-5 flex-wrap">
          {locations.map((location) => (
            <div
              key={location.id}
              className=" max-w-[500px] min-w-[500px] relative"
            >
              <div className="container aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                <img
                  src={location.imageSrc}
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
                      {location.titre}{" "}
                    </a>
                  </h3>
                  <span className="text-sm italic">{location.finBail}</span>
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
        </section>
      </div>
    </div>
  );
}

export default Recherche;
