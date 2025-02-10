import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// PokemonCard 컴포넌트 정의
function PokemonCard({ addPokemon, mockData }) {
  // useNavigate 훅 사용
  const navigate = useNavigate();

  return (
    <>
      {mockData.map((pokemon) => (
        <PokemonCardFrame
          key={pokemon.korean_name}
          onClick={() => {
            // 포켓몬 상세 페이지로 이동
            navigate({
              pathname: "/dex/pokemon-detail",
              search: `?id=${pokemon.id}`,
            });
          }}
        >
          <PokemonCardImg src={pokemon.img_url} alt={pokemon.korean_name} />
          <div>
            <strong>{pokemon.korean_name}</strong>
            <p>No. {String(pokemon.id).padStart(3, 0)}</p>
            {/* 포켓몬 추가 버튼 */}
            <AddButton onClick={(e) => addPokemon(e, pokemon)}>추가</AddButton>
          </div>
        </PokemonCardFrame>
      ))}
    </>
  );
}

export default PokemonCard;

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

// 포켓몬 카드 프레임 스타일 정의
const PokemonCardFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  transition: transform 0.2s;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

// 포켓몬 카드 이미지 스타일 정의
const PokemonCardImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

// 추가 버튼 스타일 정의
const AddButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 16px;
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
