import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import store from "./app/store";
import MyFollow from "./Pages/MyFollow.jsx";
import Recherche from "./Pages/Recherche.jsx";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";

import logo from "./assets/images/logo/logo.png";
import isAuth, { canActivate } from "./hooks/isAuth.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: isAuth,
    children: [
      { path: "/", element: <Home logo={logo} /> },
      { path: "mon-suivi", element: <MyFollow /> },
      { path: "recherche", element: <Recherche /> },
      { path: "profile", element: <Profile />, loader: canActivate },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
