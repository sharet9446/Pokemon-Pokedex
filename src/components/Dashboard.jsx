import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../contexts/pokemonContext";

const PokemonChoiceStyle = styled.div`
  background-color: antiquewhite;
  margin: 25px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PokemonChoiceTitle = styled.h1`
  text-align: center;
  color: #ff6347;
  padding-bottom: 30px;
`;

const PokemonChoiceCardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 512px) {
    justify-content: center;
  }
`;

const PokemonChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifyContent};
  align-items: center;
  background-color: white;
  width: 170px;
  height: 170px;
  border: 2px dashed black;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: ${(props) => props.$scale};
  }
`;

const PokemonChoiceCardImg = styled.img`
  width: 120px;
  height: 120px;
`;

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

function Dashboard() {
  const { pokemonChoiceList, setPokemonChoiceList } =
    useContext(PokemonContext);

  const maxPokemonSlots = 6;

  const pokemonNavigate = useNavigate();

  const removePokemon = (e, id) => {
    e.stopPropagation();
    setPokemonChoiceList(
      pokemonChoiceList.filter((pokemon) => pokemon.uuid !== id)
    );
  };

  return (
    <>
      <PokemonChoiceStyle>
        <PokemonChoiceTitle>나만의 포켓몬</PokemonChoiceTitle>
        <PokemonChoiceCardList>
          {Array.from({ length: maxPokemonSlots }).map((_, index) => {
            const pokemon = pokemonChoiceList[index];

            return (
              <PokemonChoiceCard
                key={pokemon ? pokemon.uuid : index}
                $justifyContent={pokemon ? "flex-end" : "center"}
                $scale={pokemon && "scale(1.06)"}
                onClick={() => {
                  pokemon &&
                    pokemonNavigate(`/pokemon-detail?id=${pokemon.id}`, {
                      state: { pokemonData: pokemonChoiceList },
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
                {pokemon && (
                  <DeleteButton onClick={(e) => removePokemon(e, pokemon.uuid)}>
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
