import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../pages/MOCK_DATA";

const initialState = {
  pokemonChoiceList: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const duplicationPokemon = state.pokemonChoiceList.find(
        (pokemonChoice) => pokemonChoice.id === action.payload
      );

      if (duplicationPokemon) {
        alert(
          `"${duplicationPokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`
        );
        return;
      }
      MOCK_DATA.map((list) => {
        if (list.id === action.payload) {
          if (state.pokemonChoiceList.length < 6) {
            state.pokemonChoiceList.push({
              ...list,
              uuid: crypto.randomUUID(),
            });
          } else {
            alert("모든 포켓몬이 이미 선택되었습니다.");
            return;
          }
        }
      });
    },

    removePokemon: (state, action) => {
      state.pokemonChoiceList = state.pokemonChoiceList.filter(
        (pokemon) => pokemon.uuid !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
