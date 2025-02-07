import styled from "styled-components";
import MOCK_DATA from "../contexts/MOCK_DATA";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailKan = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailImg = styled.img`
  width: 200px;
  height: 200px;
`;

const DetailName = styled.h1`
  color: red;
`;

const DetailType = styled.p`
  font-size: 20px;
  margin: 10px;
`;

const DetailDescription = styled.p`
  font-size: 18px;
`;

const DetailButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkButton = styled.button`
  text-decoration: none;
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9534f;
  }
`;

// ----------------------------------------------  styled-components 종료 ---------------------------------------------- //

const PokemonDetail = () => {
  const { addPokemon } = useContext(PokemonContext);

  const [searchParams] = useSearchParams();
  const pokemonId = Number(searchParams.get("id"));

  const backNavigate = useNavigate();

  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId);

  if (!pokemon) {
    return (
      <DetailPage>
        <DetailKan>포켓몬 정보를 불러올 수 없습니다.</DetailKan>
        <LinkButton
          onClick={() => {
            backNavigate(`/dex`);
          }}
        >
          돌아가기
        </LinkButton>
      </DetailPage>
    );
  }

  return (
    <DetailPage>
      <DetailKan>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <DetailButtonsDiv>
          <LinkButton onClick={(e) => addPokemon(e, pokemon.id)}>
            추가
          </LinkButton>
          <LinkButton
            onClick={() => {
              backNavigate(`/dex`);
            }}
          >
            돌아가기
          </LinkButton>
        </DetailButtonsDiv>
        <DetailName>{pokemon.korean_name}</DetailName>
        <DetailType>타입: {pokemon.types.join(", ")}</DetailType>
        <DetailDescription>{pokemon.description}</DetailDescription>
      </DetailKan>
    </DetailPage>
  );
};

export default PokemonDetail;
