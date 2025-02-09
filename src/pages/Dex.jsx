import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonDetail from "../components/PokemonDetail";
import PokemonList from "../components/PokemonList";

function Dex() {
  return (
    <>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/" element={<PokemonList />} />
          <Route path="pokemon-detail" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default Dex;
