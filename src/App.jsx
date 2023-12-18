import "./App.css";

import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import logo from "./assets/images/logo/logo.png";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { fetchAccomodation } from "../src/app/reducer/accomodationsReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccomodation());
  }, [dispatch]);

  function Layout({ children }) {
    return (
      <div className="flex flex-col justify-between h-screen">
        <Header logo={logo} />
        {children}
        <Footer logo={logo} />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Layout>
        <Outlet logo={logo} />
      </Layout>
      ;
    </div>
  );
}

export default App;
