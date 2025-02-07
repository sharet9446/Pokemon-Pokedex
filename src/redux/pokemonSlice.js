import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
