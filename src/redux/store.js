import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

// Redux 스토어 구성
export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
