import styled from "styled-components";
import MOCK_DATA from "../pages/MOCK_DATA";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/pokemonSlice";
import { useEffect } from "react";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pokemonSearchId = searchParams.get("id");
  const backNavigate = useNavigate();
  const location = useLocation();

  const pokemon =
    MOCK_DATA.find(
      (pokemon) =>
        pokemon.id === Number(pokemonSearchId) ||
        pokemon.korean_name === pokemonSearchId
    ) || null;

  useEffect(() => {
    if (pokemon?.img_url) {
      const img = new Image();
      img.src = pokemon.img_url;
    }
  }, [location.pathname, pokemon]);

  if (!pokemon) {
    return (
      <DetailPage>
        <DetailKan>포켓몬 정보를 불러올 수 없습니다.</DetailKan>
        <DetailButton onClick={() => backNavigate("/dex")}>
          돌아가기
        </DetailButton>
      </DetailPage>
    );
  }

  return (
    <DetailPage>
      <DetailNavDiv>
        {pokemon.id > 1 && (
          <>
            <DetailNavLink to={`?id=${pokemon.id - 1}`}>◀ 이전</DetailNavLink>
            <DetailNavInfo>
              {String(pokemon.id - 1).padStart(3, "0")}{" "}
              {MOCK_DATA[pokemon.id - 2]?.korean_name || ""}
            </DetailNavInfo>
          </>
        )}
        {pokemon.id < MOCK_DATA.length && (
          <>
            <DetailNavInfo>
              {String(pokemon.id + 1).padStart(3, "0")}{" "}
              {MOCK_DATA[pokemon.id]?.korean_name || ""}
            </DetailNavInfo>
            <DetailNavLink to={`?id=${pokemon.id + 1}`}>다음 ▶</DetailNavLink>
          </>
        )}
      </DetailNavDiv>
      <DetailKan>
        <DetailImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <DetailButtonsDiv>
          <DetailButton
            onClick={() => {
              dispatch(addPokemon(pokemon));
            }}
          >
            추가
          </DetailButton>
          <DetailButton onClick={() => backNavigate("/dex")}>
            돌아가기
          </DetailButton>
        </DetailButtonsDiv>
        <h2>
          <DetailNumber>
            No. {String(pokemon.id).padStart(3, "0")}{" "}
          </DetailNumber>
          <DetailName>{pokemon.korean_name}</DetailName>
        </h2>
        <DetailType>타입: {pokemon.types.join(", ")}</DetailType>
        <DetailDescription>{pokemon.description}</DetailDescription>
      </DetailKan>
    </DetailPage>
  );
};

export default PokemonDetail;

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailNavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;

const DetailNavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: blue;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailNavInfo = styled.span`
  font-size: 14px;
  color: gray;
  font-weight: bold;
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

const DetailNumber = styled.span`
  font-size: 14px;
  color: gray;
  margin-right: 8px;
`;

const DetailName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

const DetailType = styled.p`
  font-size: 20px;
  margin: 5.5px;
`;

const DetailDescription = styled.p`
  font-size: 18px;
`;

const DetailButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const DetailButton = styled.button`
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
