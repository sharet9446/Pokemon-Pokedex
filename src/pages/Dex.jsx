import { useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../components/MOCK_DATA";
import PokemonList from "../components/PokemonList";

function Dex() {
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  const maxPokemon = 6;

  const addPokemon = (id) => {
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
    <>
      <Dashboard
        pokemonChoiceList={pokemonChoiceList}
        setPokemonChoiceList={setPokemonChoiceList}
      />
      <PokemonList addPokemon={addPokemon} />
    </>
  );
}

export default Dex;
