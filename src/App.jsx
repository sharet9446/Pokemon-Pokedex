import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  const maxPokemon = 6;

  const addPokemon = (e, pokemon) => {
    e.stopPropagation();

    if (pokemonChoiceList.some((p) => p.id === pokemon.id)) {
      toast.info(`"${pokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (pokemonChoiceList.length < maxPokemon) {
      setPokemonChoiceList([...pokemonChoiceList, pokemon]);
      toast.success(`"${pokemon.korean_name}"이(가) 추가되었습니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error(`포켓몬은 최대 ${maxPokemon}마리까지 선택 가능합니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
  };

  const removePokemon = (e, id) => {
    e.stopPropagation();
    setPokemonChoiceList(
      pokemonChoiceList.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex/*"
          element={
            <Dex
              addPokemon={addPokemon}
              removePokemon={removePokemon}
              pokemonChoiceList={pokemonChoiceList}
              maxPokemon={maxPokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
