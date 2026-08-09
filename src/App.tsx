import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/acceuil";
import Merci from "./pages/merci";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/merci" element={<Merci />} />
      </Routes>
    </BrowserRouter>
  );
}