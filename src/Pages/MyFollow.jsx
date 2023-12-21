import { useDispatch, useSelector } from "react-redux";
import locations from "../assets/data/fakeHouse";
import { useEffect } from "react";
import { fetchFollowed } from "../app/reducer/followReducer";
import { toggleValue } from "../app/reducer/openLogin";

export default function MyFollow() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollowed());
  }, [dispatch]);

  const followedLocations = useSelector((state) => state.follows.followed);

  const isLogged = useSelector((state) => state.isLogged.isLog);

  if (!isLogged) {
    dispatch(toggleValue());
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mon suivi
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Suivez les locations qui vous intéressent et contactez les
              locataires sortants en vous connectant.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mon suivi
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Suivez les locations qui vous intéressent et contactez les
            locataires sortants.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {followedLocations.length > 0 &&
            followedLocations.map((location) => (
              <article
                key={location.id}
                className={`flex max-w-xl flex-col items-start justify-between`}
                style={{
                  backgroundImage: `url(http://localhost:3000/public/getImage/${location.id})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <section className="bg-white/80 flex flex-col justify-between w-full h-full p-4">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={location.end_of_contract}
                      className="text-gray-500"
                    >
                      {location.end_of_contract}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={location.href}>
                        <span className="absolute inset-0" />
                        {location.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {location.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={`http://localhost:3000/public/getImage/${location.id}`}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <section className="flex justify-between w-full items-center flex-wrap">
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a>
                            <span className="absolute inset-0" />
                            {location.loyerMensuel}
                          </a>
                        </p>
                        <p className="text-gray-600">{location.localisation}</p>
                      </div>
                      <div className="z-10 flex gap-2 flex-wrap">
                        <button className="z-10 rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000">
                          Demander le contact
                        </button>
                        <button className="z-10 text-sm rounded-md font-semibold leading-6 px-3.5 py-2.5 text-gray-900 hover:bg-gray-300 transition-all ease-in-out duration-1000">
                          Ne plus suivre
                        </button>
                      </div>
                    </section>
                  </div>
                </section>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
