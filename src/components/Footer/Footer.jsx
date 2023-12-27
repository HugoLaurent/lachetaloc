import { Link } from "react-router-dom";

function Footer({ logo }) {
  const thisYear = new Date().getFullYear();

  return (
    <div className="relative mt-16 bg-[#374151] texte-white">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#374151"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" lg:col-span-2 flex w-full items-center justify-between">
          <section className="flex flex-wrap w-full justify-center lg:justify-between items-center">
            <Link
              to={"/"}
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="w-96" src={logo} alt="" />
            </Link>
            <ul className="mt-2 flex flex-wrap text-white gap-4">
              <li className="w-[100px]">
                <Link to={"/"}>Accueil</Link>
              </li>
              <li className="w-[100px]">
                <Link to={"/mon-suivi"}>Mon suivi</Link>
              </li>
              <li className="w-[100px]">
                <Link to={"/recherche"}>Recherche</Link>
              </li>
              <li className="w-[100px]">
                <Link to={"a-propos"}>A propos</Link>
              </li>
              <li className="w-[100px]">
                <Link to={"confidentialite"}>Politique de confidentialité</Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
          <p className="text-sm text-gray-100">
            © Copyright {thisYear} lachetaloc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
