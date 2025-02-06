import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../contexts/pokemonContext";

const PokemonCardFrame = styled.a`
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

const PokemonCardImg = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

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

function PokemonCard({ mockData }) {
  const pokemonNavigate = useNavigate();
  const { addPokemon } = useContext(PokemonContext);

  return (
    <>
      {mockData.map(({ img_url, korean_name, id }) => (
        <PokemonCardFrame
          key={id}
          onClick={() => {
            pokemonNavigate(`/pokemon-detail?id=${id}`, {
              state: { pokemonData: mockData },
            });
          }}
        >
          <PokemonCardImg src={img_url} alt={korean_name} />
          <div>
            <strong>{korean_name}</strong>
            <p>No. {String(id).padStart(3, 0)}</p>
            <AddButton onClick={(e) => addPokemon(e, id)}>추가</AddButton>
          </div>
        </PokemonCardFrame>
      ))}
    </>
  );
}

export default PokemonCard;
