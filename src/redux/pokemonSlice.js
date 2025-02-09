import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  pokemonChoiceList: [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
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

      const duplicationPokemon = state.pokemonChoiceList.find(
        (pokemonChoice) => pokemonChoice.id === action.payload.id
      );

      if (duplicationPokemon) {
        duplicatePokemonList();
        return;
      }

      if (state.pokemonChoiceList.length < 6) {
        state.pokemonChoiceList.push(action.payload);
      } else {
        fullPokemonListToast();
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
