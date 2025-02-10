import { Route, Routes } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import PokemonDetail from "../components/PokemonDetail";

// Dex 컴포넌트 정의
function Dex({
  addPokemon,
  removePokemon,
  selectedPokemonList,
  MAXPOKEMONCOUNT,
}) {
  return (
    <>
      <Routes>
        <Route
          element={
            <Dashboard
              removePokemon={removePokemon}
              selectedPokemonList={selectedPokemonList}
              MAXPOKEMONCOUNT={MAXPOKEMONCOUNT}
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
