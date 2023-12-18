import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../app/reducer/loginStatusReducer";
import { toggleValue } from "../../app/reducer/openLogin";

export default function LogIn({ switchRegistration, setSwitchRegistration }) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pseudo, password }),
      });
      dispatch(changeStatus());
      dispatch(toggleValue());

      const token = await response.json();
      localStorage.setItem("token", token.token);
      localStorage.setItem("refreshToken", token.refreshToken);
      window.location.reload();
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div
        className={`flex min-h-full transition-all ease-in min-w-fit flex-1 flex-col justify-center px-6 py-12 lg:px-8 ${
          switchRegistration ? "opacity-0" : ""
        }`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Connecter vous à votre compte.
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
                  id="password"
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
                Connectez vous!
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between">
          <p>Vous n&apos;avez pas de compte ? </p>
          <button
            onClick={() => setSwitchRegistration(!switchRegistration)}
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Inscrivez-vous !
          </button>
        </div>
      </div>
    </>
  );
}
