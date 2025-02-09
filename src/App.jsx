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

    const fullPokemonListToast = () => {
      toast.error("포켓몬은 최대 6마리까지 선택 가능합니다.", {
        position: "top-center",
        autoClose: 3000,
      });
    };

    const duplicatePokemonList = () => {
      toast.info(
        `"${duplicationPokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`,
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    };

    // 선택된 포켓몬 중복 확인
    const duplicationPokemon = pokemonChoiceList.find(
      (pokemonChoice) => pokemonChoice.id === pokemon.id
    );

    if (duplicationPokemon) {
      duplicatePokemonList();
      return;
    }
    // 포켓몬 선택 리스트에 포켓몬 추가

    if (pokemonChoiceList.length < maxPokemon) {
      setPokemonChoiceList([...pokemonChoiceList, pokemon]);
    } else {
      fullPokemonListToast();
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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
