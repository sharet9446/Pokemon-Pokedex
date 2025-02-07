import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../pages/MOCK_DATA";

const PokemonCardMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  padding: 30px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  gap: 30px;
`;

function PokemonList({ addPokemon }) {
  return (
    <PokemonCardMain>
      <PokemonCard addPokemon={addPokemon} mockData={MOCK_DATA} />
    </PokemonCardMain>
  );
}

export default PokemonList;
