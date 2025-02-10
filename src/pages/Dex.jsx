import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonDetail from "../components/PokemonDetail";

// Dex 컴포넌트 정의
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
