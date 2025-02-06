import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

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

const BackLinkButton = styled.button`
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

const PokemonDetail = ({ addPokemon }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const location = useLocation();
  const data = location.state;
  const backNavigate = useNavigate();

  if (!id || !data) {
    return (
      <DetailPage>
        <DetailKan>포켓몬 정보를 불러올 수 없습니다.</DetailKan>
        <BackLinkButton
          onClick={() => {
            backNavigate(`/dex`);
          }}
        >
          돌아가기
        </BackLinkButton>
      </DetailPage>
    );
  }

  const pokemon = data.pokemonData.find((pokemon) => pokemon.id === Number(id));

  return (
    <DetailPage>
      <DetailKan>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <DetailButtonsDiv>
          <BackLinkButton onClick={(e) => addPokemon(e, pokemon.id)}>
            추가
          </BackLinkButton>
          <BackLinkButton
            onClick={() => {
              backNavigate(`/dex`);
            }}
          >
            돌아가기
          </BackLinkButton>
        </DetailButtonsDiv>
        <DetailName>{pokemon.korean_name}</DetailName>
        <DetailType>타입: {pokemon.types.join(", ")}</DetailType>
        <DetailDescription>{pokemon.description}</DetailDescription>
      </DetailKan>
    </DetailPage>
  );
};

export default PokemonDetail;
