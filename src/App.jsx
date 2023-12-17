import "./App.css";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "./components/Header/Header";

import logo from "./assets/images/logo/logo.png";

import { fetchAccomodation } from "../src/app/reducer/accomodationsReducer";
import { Footer } from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccomodation());
  }, [dispatch]);

  return (
    <>
      <Header logo={logo} />
      <Outlet />;
      <Footer logo={logo} />
    </>
  );
}

export default App;
