import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { PokemonProvider } from "./contexts/PokemonContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex/*" element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
