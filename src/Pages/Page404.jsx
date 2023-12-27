import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="container mx-auto w-2/3 my-5 p-8 border shadow-md flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-semibold mb-4">Oops! Page introuvable</h1>
      <p className="text-lg text-gray-600 mb-8">
        Il semble que vous ayez pris un mauvais chemin. Pas de soucis, même les
        meilleurs se perdent parfois.
      </p>
      <img
        src="https://images.pexels.com/photos/5461036/pexels-photo-5461036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Maison vide"
        className="mb-8 w-2/3"
      />
      <Link to="/" className="text-blue-500 underline">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default Page404;
