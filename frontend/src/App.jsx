import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Carte from "./pages/Carte";
import Signaler from "./pages/Signaler";
import Connexion from "./pages/Connexion";
import APropos from "./pages/APropos";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/carte" element={<Carte />} />

      <Route path="/signaler" element={<Signaler />} />

      <Route path="/connexion" element={<Connexion />} />

      <Route path="/a-propos" element={<APropos />} />

    </Routes>
  );
}