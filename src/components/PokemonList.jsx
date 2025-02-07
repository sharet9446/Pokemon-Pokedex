import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../pages/MOCK_DATA";

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

const PokemonListMain = styled.div`
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

// ----------------------------------------------  styled-components 종료 ---------------------------------------------- //

function PokemonList() {
  return (
    <PokemonListMain>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonListMain>
  );
}

export default PokemonList;
