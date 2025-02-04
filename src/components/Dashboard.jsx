import styled from "styled-components";

const PokemonChoiceStyle = styled.div`
  background-color: antiquewhite;
  margin: 25px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PokemonChoiceTitle = styled.h1`
  text-align: center;
  color: #ff6347;
  padding-bottom: 40px;
`;

const PokemonChoiceCardList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
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

function Dashboard({ setPokemonChoiceList, pokemonChoiceList }) {
  const maxPokemonSlots = 6;

  const removePokemon = (id) => {
    setPokemonChoiceList(
      pokemonChoiceList.filter((pokemon) => pokemon.uuid !== id)
    );
  };

  return (
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
                <DeleteButton onClick={() => removePokemon(pokemon.uuid)}>
                  삭제
                </DeleteButton>
              )}
            </PokemonChoiceCard>
          );
        })}
      </PokemonChoiceCardList>
    </PokemonChoiceStyle>
  );
}

export default Dashboard;
