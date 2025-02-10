import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// 초기 상태 정의
const initialState = {
  selectedPokemonList: [],
  maxPokemonCount: 6,
};

// pokemonSlice 생성
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    // 포켓몬 추가 리듀서
    addPokemon: (state, action) => {
      // 이미 선택된 포켓몬인지 확인
      if (state.selectedPokemonList.some((p) => p.id === action.payload.id)) {
        toast.info(
          `"${action.payload.korean_name}"은(는) 이미 선택된 포켓몬입니다.`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        return;
      }

      // 최대 선택 가능한 포켓몬 수를 초과하지 않는지 확인
      if (state.selectedPokemonList.length < state.maxPokemonCount) {
        state.selectedPokemonList.push(action.payload);
        toast.success(`"${action.payload.korean_name}"이(가) 추가되었습니다`, {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(
          `포켓몬은 최대 ${state.maxPokemonCount}마리까지 선택 가능합니다.`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        return;
      }
    },

    // 포켓몬 제거 리듀서
    removePokemon: (state, action) => {
      state.selectedPokemonList = state.selectedPokemonList.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

// 액션과 리듀서 내보내기
export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
