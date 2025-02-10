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

// PokemonDetail 컴포넌트 정의
const PokemonDetail = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const navigate = useNavigate();
  const location = useLocation();

  // 선택된 포켓몬 데이터 찾기
  const pokemon =
    MOCK_DATA.find(
      (pokemon) =>
        pokemon.id === Number(pokemonId) || pokemon.korean_name === pokemonId
    ) || null;

  // 포켓몬 이미지 미리 로드
  useEffect(() => {
    if (pokemon?.img_url) {
      const img = new Image();
      img.src = pokemon.img_url;
    }
  }, [location.pathname, pokemon]);

  // 포켓몬이 없을 경우
  if (!pokemon) {
    return (
      <DetailPage>
        <DetailKan>포켓몬 정보를 불러올 수 없습니다.</DetailKan>
        <DetailButton onClick={() => navigate("/dex")}>돌아가기</DetailButton>
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
          <DetailButton onClick={() => navigate("/dex")}>돌아가기</DetailButton>
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

// 상세 페이지 스타일 정의
const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 네비게이션 스타일 정의
const DetailNavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
`;

// 네비게이션 링크 스타일 정의
const DetailNavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: blue;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

// 네비게이션 정보 스타일 정의
const DetailNavInfo = styled.span`
  font-size: 14px;
  color: gray;
  font-weight: bold;
`;

// 포켓몬 상세 정보 스타일 정의
const DetailKan = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 포켓몬 이미지 스타일 정의
const DetailImg = styled.img`
  width: 200px;
  height: 200px;
`;

// 포켓몬 번호 스타일 정의
const DetailNumber = styled.span`
  font-size: 14px;
  color: gray;
  margin-right: 8px;
`;

// 포켓몬 이름 스타일 정의
const DetailName = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: red;
`;

// 포켓몬 타입 스타일 정의
const DetailType = styled.p`
  font-size: 20px;
  margin: 5.5px;
`;

// 포켓몬 설명 스타일 정의
const DetailDescription = styled.p`
  font-size: 18px;
`;

// 버튼 컨테이너 스타일 정의
const DetailButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
`;

// 버튼 스타일 정의
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
