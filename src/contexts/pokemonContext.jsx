import { createContext, useState } from "react";
import MOCK_DATA from "./MOCK_DATA";

// PokemonContext 생성
export const PokemonContext = createContext();

// PokemonProvider 컴포넌트 정의
export function PokemonProvider({ children }) {
  // 선택된 포켓몬 리스트 상태 관리
  const [pokemonChoiceList, setPokemonChoiceList] = useState([]);

  // 최대 선택 가능한 포켓몬 수
  const maxPokemon = 6;

  // 포켓몬 추가 함수
  const addPokemon = (e, id) => {
    e.stopPropagation();
    // 선택된 포켓몬 중복 확인
    const duplicationPokemon = pokemonChoiceList.find(
      (pokemonChoice) => pokemonChoice.id === id
    );
    if (duplicationPokemon) {
      alert(
        `"${duplicationPokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`
      );
      return;
    }
    // 포켓몬 선택 리스트에 포켓몬 추가
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

  // 포켓몬 제거 함수
  const removePokemon = (e, id) => {
    e.stopPropagation();
    setPokemonChoiceList(
      pokemonChoiceList.filter((pokemon) => pokemon.uuid !== id)
    );
  };

  // PokemonContext.Provider로 하위 컴포넌트에 값 전달
  return (
    <PokemonContext.Provider
      value={{
        pokemonChoiceList,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
