import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";
import Dashboard from "./components/Dashboard";
import MOCK_DATA from "./contexts/MOCK_DATA";
import { PokemonContext } from "./contexts/pokemonContext";
import { useState } from "react";

function App() {
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  const addPokemon = (e, id) => {
    e.stopPropagation();
    const maxPokemon = 6;
    const duplicationPokemon = pokemonChoiceList.find(
      (pokemonChoice) => pokemonChoice.id === id
    );
    if (duplicationPokemon) {
      alert(
        `"${duplicationPokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`
      );
      return;
    }
    MOCK_DATA.map((list) => {
      if (list.id === id) {
        if (pokemonChoiceList.length < maxPokemon) {
          setPokemonChoiceList([
            ...pokemonChoiceList,
            { ...list, uuid: crypto.randomUUID() },
          ]);
        } else {
          alert("모든 포켓몬이 이미 선택되었습니다.");
          return;
        }
      }
    });
  };

  return (
    <PokemonContext.Provider
      value={{ pokemonChoiceList, setPokemonChoiceList, addPokemon }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Dashboard />}>
            <Route path="dex" element={<Dex />} />
            <Route path="pokemon-detail" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  );
}

export default App;
