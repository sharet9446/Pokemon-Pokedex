import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../pages/MOCK_DATA";

// PokemonList 컴포넌트 정의
function PokemonList({ addPokemon }) {
  return (
    <PokemonCardContainer>
      <PokemonCard addPokemon={addPokemon} mockData={MOCK_DATA} />
    </PokemonCardContainer>
  );
}

export default PokemonList;

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

// 포켓몬 카드 컨테이너 스타일 정의
const PokemonCardContainer = styled.div`
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
