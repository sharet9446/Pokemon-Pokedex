import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import MOCK_DATA from "./pages/MOCK_DATA";

function App() {
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  const maxPokemon = 6;

  const addPokemon = (e, id) => {
    e.stopPropagation();
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
          <Route path="dex" element={<Dex addPokemon={addPokemon} />} />
          <Route
            path="pokemon-detail"
            element={
              <PokemonDetail addPokemon={addPokemon} MOCK_DATA={MOCK_DATA} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
