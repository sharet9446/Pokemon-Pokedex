import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addPokemon } from "../redux/pokemonSlice";
import { useDispatch } from "react-redux";

function PokemonCard({ pokemon }) {
  const dispatch = useDispatch();
  const pokemonNavigate = useNavigate();

  return (
    <>
      <PokemonCardFrame
        onClick={() => {
          pokemonNavigate(`/pokemon-detail?id=${pokemon.id}`);
        }}
      >
        <PokemonCardImg src={pokemon.img_url} alt={pokemon.korean_name} />
        <div>
          <strong>{pokemon.korean_name}</strong>
          <p>No. {String(pokemon.id).padStart(3, 0)}</p>
          <AddButton
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addPokemon(pokemon.id));
            }}
          >
            추가
          </AddButton>
        </div>
      </PokemonCardFrame>
    </>
  );
}

export default PokemonCard;

// ----------------------------------------------  styled-components 시작 ---------------------------------------------- //

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

// ----------------------------------------------  styled-components 종료 ---------------------------------------------- //
