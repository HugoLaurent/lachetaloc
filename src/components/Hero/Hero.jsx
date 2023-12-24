import { useDispatch } from "react-redux";
import { toggleValue } from "../../app/reducer/openLogin";
import { redirect } from "react-router-dom";

export default function Hero({ logo }) {
  const dispatch = useDispatch();

  function handleJeChercheButton() {
    dispatch(toggleValue());
  }

  function handleJeLacheButton() {
    dispatch(toggleValue());
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:py-20">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-3xl items-center flex flex-col gap-6 font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trouvez votre prochain chez-vous en toute simplicité avec{" "}
            <img className="rounded-lg" src={logo} alt="" />
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libérez votre logement en toute sérénité ou trouvez votre prochaine
            location facilement avec Lache ta loc, la plateforme de mise en
            relation entre locataires sortants et chercheurs de logement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleJeChercheButton}
              className="rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000"
            >
              Je cherche !
            </button>
            <button
              onClick={handleJeLacheButton}
              className="text-sm rounded-md font-semibold leading-6 px-3.5 py-2.5 text-gray-900 hover:bg-gray-300 transition-all ease-in-out duration-1000"
            >
              Je lache ! <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  );
}
