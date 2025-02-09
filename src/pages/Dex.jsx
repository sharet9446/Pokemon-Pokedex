import { Route, Routes } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import PokemonDetail from "../components/PokemonDetail";

function Dex({ addPokemon, removePokemon, pokemonChoiceList, maxPokemon }) {
  return (
    <>
      <Routes>
        <Route
          element={
            <Dashboard
              removePokemon={removePokemon}
              pokemonChoiceList={pokemonChoiceList}
              maxPokemon={maxPokemon}
            />
          }
        >
          <Route path="/" element={<PokemonList addPokemon={addPokemon} />} />
          <Route
            path="pokemon-detail"
            element={<PokemonDetail addPokemon={addPokemon} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default Dex;
