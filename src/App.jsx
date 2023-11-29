import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import MyFollow from "./Pages/MyFollow";

import logo from "./assets/images/logo/logo.png";
import MaLocation from "./Pages/MaLocation";
import Recherche from "./Pages/Recherche";

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route index element={<Home logo={logo} />} />
        <Route path="mon-suivi" element={<MyFollow />} />
        <Route path="ma-location" element={<MaLocation />} />
        <Route path="recherche" element={<Recherche />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
