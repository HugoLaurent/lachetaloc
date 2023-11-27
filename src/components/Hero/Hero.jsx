export default function Hero({ logo }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-40">
        <div className="text-center">
          <h1 className="text-3xl items-center flex flex-col font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trouvez votre prochain chez-vous en toute simplicité avec{" "}
            <img className="rounded-lg" src={logo} alt="" />
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libérez votre logement en toute sérénité ou trouvez votre prochaine
            location facilement avec Lache ta loc, la plateforme de mise en
            relation entre locataires sortants et chercheurs de logement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-[#374151] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 transition-all ease-in-out duration-1000"
            >
              Je cherche !
            </a>
            <a
              href="#"
              className="text-sm rounded-md font-semibold leading-6 px-3.5 py-2.5 text-gray-900 hover:bg-gray-300 transition-all ease-in-out duration-1000"
            >
              Je lache ! <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
