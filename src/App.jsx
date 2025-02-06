import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <Dashboard
              pokemonChoiceList={pokemonChoiceList}
              setPokemonChoiceList={setPokemonChoiceList}
            />
          }
        >
          <Route
            path="dex"
            element={
              <Dex
                pokemonChoiceList={pokemonChoiceList}
                setPokemonChoiceList={setPokemonChoiceList}
              />
            }
          />
          <Route
            path="pokemon-detail"
            element={<PokemonDetail pokemonChoiceList={pokemonChoiceList} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
