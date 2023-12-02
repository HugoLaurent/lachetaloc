import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import MyFollow from "./Pages/MyFollow";

import logo from "./assets/images/logo/logo.png";
import Recherche from "./Pages/Recherche";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route index element={<Home logo={logo} />} />
        <Route path="mon-suivi" element={<MyFollow />} />
        <Route path="recherche" element={<Recherche />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
