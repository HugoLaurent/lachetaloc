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
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <img className="w-96" src={logo} alt="" />
          </a>
          <ul className="mt-2 flex text-white gap-4">
            <li>
              <Link
                to={"/"}
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to={"/mon-suivi"}
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
              >
                Mon suivi
              </Link>
            </li>
            <li>
              <Link
                to={"/recherche"}
                className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
              >
                Recherche
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright {thisYear} lachetaloc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link to={"confidentialite"}>Politique de confidentialité</Link>
            <Link to={"a-propos"}>A propos</Link>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
