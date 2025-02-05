import { Link, useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const DetailPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  width: 250px;
  height: 250px;
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

const BackLinkButton = styled(Link)`
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
  const mockData = location.state.mockData;

  const pokemon = mockData.find((pokemon) => pokemon.id === Number(id));

  return (
    <DetailPage>
      <DetailKan>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <DetailName>{pokemon.korean_name}</DetailName>
        <DetailType>타입: {pokemon.types.join(", ")}</DetailType>
        <DetailDescription>{pokemon.description}</DetailDescription>
        <BackLinkButton to={"/dex"}>돌아가기</BackLinkButton>
      </DetailKan>
    </DetailPage>
  );
};

export default PokemonDetail;
