import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function App() {
  // 선택된 포켓몬 리스트 상태 관리
  const [selectedPokemonList, setSelectedPokemonList] = useState([]);

  // 최대 선택 가능한 포켓몬 수
  const maxPokemonCount = 6;

  // 포켓몬 추가 함수
  const addPokemon = (e, pokemon) => {
    e.stopPropagation();

    // 이미 선택된 포켓몬인지 확인
    if (selectedPokemonList.some((p) => p.id === pokemon.id)) {
      toast.info(`"${pokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // 최대 선택 가능한 포켓몬 수를 초과하지 않는지 확인
    if (selectedPokemonList.length < maxPokemonCount) {
      setSelectedPokemonList([...selectedPokemonList, pokemon]);
      toast.success(`"${pokemon.korean_name}"이(가) 추가되었습니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error(`포켓몬은 최대 ${maxPokemonCount}마리까지 선택 가능합니다.`, {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
  };

  // 포켓몬 제거 함수
  const removePokemon = (e, id) => {
    e.stopPropagation();
    setSelectedPokemonList(selectedPokemonList.filter((p) => p.id !== id));
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
              selectedPokemonList={selectedPokemonList}
              maxPokemonCount={maxPokemonCount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
