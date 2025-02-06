import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Dashboard from "./components/Dashboard";
import PokemonDetail from "./components/PokemonDetail";
import { PokemonProvider } from "./contexts/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Dashboard />}>
            <Route path="dex" element={<Dex />} />
            <Route path="pokemon-detail" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
