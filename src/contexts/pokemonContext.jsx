import { createContext, useState } from "react";
import { toast } from "react-toastify";

// PokemonContext 생성
export const PokemonContext = createContext();

// PokemonProvider 컴포넌트 정의
export function PokemonProvider({ children }) {
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
    setSelectedPokemonList(
      selectedPokemonList.filter((pokemon) => pokemon.id !== id)
    );
  };

  // PokemonContext.Provider로 하위 컴포넌트에 값 전달
  return (
    <PokemonContext.Provider
      value={{
        selectedPokemonList,
        maxPokemonCount,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
