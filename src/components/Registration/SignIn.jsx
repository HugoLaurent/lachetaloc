import { useState, useEffect } from "react";
import Alert from "../Alert/Alert";

export default function SignIn({ switchRegistration, setSwitchRegistration }) {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://lachetaloc.onrender.com/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pseudo, email, password }),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.message);
        throw new Error(errorResponse.message || "Failed to create user");
      }
      setEmail("");
      setPassword("");
      setPseudo("");
      setSwitchRegistration(!switchRegistration);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => {
      clearTimeout(timeoutId); // Nettoyage du timeout si le composant est démonté ou si la dépendance change
    };
  }, [errorMessage]);

  return (
    <>
      <div className="flex min-h-full min-w-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8 relative">
        {errorMessage && (
          <div className="absolute top-0 w-full">
            <Alert message={errorMessage} />
          </div>
        )}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inscrivez vous à lache ta loc !
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label
                htmlFor="pseudo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pseudo
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPseudo(e.target.value)}
                  id="pseudo"
                  name="pseudo"
                  type="pseudo"
                  autoComplete="pseudo"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mon mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="12 caractères minimum"
                  id="passwordLogin"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Inscrivez vous !
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between">
          <p>Déjà un compte ?</p>
          <button
            onClick={() => setSwitchRegistration(!switchRegistration)}
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Connectez-vous !
          </button>
        </div>
      </div>
    </>
  );
}
