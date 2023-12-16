import "./App.css";

import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "./components/Header/Header";

import logo from "./assets/images/logo/logo.png";

import { fetchAccomodation } from "../src/app/reducer/accomodationsReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccomodation());
  }, [dispatch]);

  return (
    <>
      <Header logo={logo} />
      <Outlet />;
    </>
  );
}

export default App;
