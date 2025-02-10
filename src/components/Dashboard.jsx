import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../redux/pokemonSlice";

// Dashboard 컴포넌트 정의
function Dashboard() {
  const { selectedPokemonList, MAXPOKEMONCOUNT } = useSelector(
    (state) => state.pokemon
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <PokemonChoiceStyle>
        <PokemonChoiceTitle>나만의 포켓몬</PokemonChoiceTitle>
        <PokemonChoiceCardList>
          {/* Array.from() 메서드를 사용하여 MAXPOKEMONCOUNT만큼의 길이를 가진 배열을 생성하고, map() 메서드를 사용하여 배열의 길이만큼 반복하며 PokemonChoiceCard 컴포넌트를 렌더링합니다. */}
          {Array.from({ length: MAXPOKEMONCOUNT }).map((_, index) => {
            const pokemon = selectedPokemonList[index];
            return (
              <PokemonChoiceCard
                key={pokemon ? pokemon.korean_name : index}
                $justifyContent={pokemon ? "flex-end" : "center"}
                onClick={() => {
                  // 포켓몬이 선택된 경우 상세 페이지로 이동
                  pokemon &&
                    navigate({
                      pathname: "/dex/pokemon-detail",
                      search: `?id=${pokemon.id}`,
                    });
                }}
              >
                <PokemonChoiceCardImg
                  src={
                    pokemon
                      ? pokemon.img_url
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                  }
                  alt={pokemon ? pokemon.korean_name : `몬스터볼`}
                />
                {pokemon && <strong>{pokemon.korean_name}</strong>}
                {/* 포켓몬이 선택된 경우 삭제 버튼 표시 */}
                {pokemon && (
                  <DeleteButton
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removePokemon(pokemon.id));
                    }}
                  >
                    삭제
                  </DeleteButton>
                )}
              </PokemonChoiceCard>
            );
          })}
        </PokemonChoiceCardList>
      </PokemonChoiceStyle>
      <Outlet />
    </>
  );
}

export default Dashboard;

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

// 포켓몬 선택 스타일 정의
const PokemonChoiceStyle = styled.div`
  background-color: antiquewhite;
  margin: 22.5px 25px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// 포켓몬 선택 타이틀 스타일 정의
const PokemonChoiceTitle = styled.h1`
  text-align: center;
  color: #ff6347;
  padding-bottom: 30px;
`;

// 포켓몬 선택 카드 리스트 스타일 정의
const PokemonChoiceCardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 22.5px;
  @media screen and (max-width: 512px) {
    justify-content: center;
  }
`;

// 포켓몬 선택 카드 스타일 정의
const PokemonChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;
  background-color: white;
  width: 172.5px;
  height: 172.5px;
  border: 2px dashed black;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: ${(props) =>
      props.$justifyContent === "flex-end" && "scale(1.06)"};
    cursor: ${(props) =>
      props.$justifyContent === "flex-end" ? "pointer" : "default"};
  }
`;

// 포켓몬 선택 카드 이미지 스타일 정의
const PokemonChoiceCardImg = styled.img`
  width: 122.5px;
  height: 122.5px;
`;

// 삭제 버튼 스타일 정의
const DeleteButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 6px 12px;
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
