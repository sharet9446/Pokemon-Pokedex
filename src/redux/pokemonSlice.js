import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pokemonChoiceList: [],
  maxPokemon: 6,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.pokemonChoiceList.some((p) => p.id === action.payload.id)) {
        toast.info(
          `"${action.payload.korean_name}"은(는) 이미 선택된 포켓몬입니다.`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        return;
      }

      if (state.pokemonChoiceList.length < state.maxPokemon) {
        state.pokemonChoiceList.push(action.payload);
        toast.success(`"${action.payload.korean_name}"이(가) 추가되었습니다`, {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(
          `포켓몬은 최대 ${state.maxPokemon}마리까지 선택 가능합니다.`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        return;
      }
    },

    removePokemon: (state, action) => {
      state.pokemonChoiceList = state.pokemonChoiceList.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
