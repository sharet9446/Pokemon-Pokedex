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

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const location = useLocation();
  const mockData = location.state;

  const backNavigate = useNavigate();

  if (!id || !mockData) {
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

  const pokemon = mockData.mockData.find(
    (pokemon) => pokemon.id === Number(id)
  );

  return (
    <DetailPage>
      <DetailKan>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <DetailName>{pokemon.korean_name}</DetailName>
        <DetailType>타입: {pokemon.types.join(", ")}</DetailType>
        <DetailDescription>{pokemon.description}</DetailDescription>
        <BackLinkButton
          onClick={() => {
            backNavigate(`/dex`);
          }}
        >
          돌아가기
        </BackLinkButton>
      </DetailKan>
    </DetailPage>
  );
};

export default PokemonDetail;
