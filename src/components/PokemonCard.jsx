import MOCK_DATA from "./MOCK_DATA";
import styled from "styled-components";

const PokemonCardMain = styled.div`
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
  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonCardImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9534f;
  }
`;

function PokemonCard({ addPokemon }) {
  return (
    <PokemonCardMain>
      {MOCK_DATA.map(({ img_url, korean_name, id }) => (
        <PokemonCardFrame key={id} onClick={() => {}}>
          <PokemonCardImg src={img_url} alt={korean_name} />
          <div>
            <strong>{korean_name}</strong>
            <p>No. {id}</p>
            <AddButton onClick={() => addPokemon(id)}>추가</AddButton>
          </div>
        </PokemonCardFrame>
      ))}
    </PokemonCardMain>
  );
}

export default PokemonCard;
