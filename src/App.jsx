import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import MyFollow from "./Pages/MyFollow";

import logo from "./assets/images/logo/logo.png";
import MaLocation from "./Pages/MaLocation";

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route index element={<Home logo={logo} />} />
        <Route path="mon-suivi" element={<MyFollow />} />
        <Route path="ma-location" element={<MaLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
