import styled from "styled-components";

const PokemonChoiceStyle = styled.div`
  background-color: antiquewhite;
  margin: 20px;
  padding: 50px;
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
`;

const PokemonChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 160px;
  height: 160px;
  border: 2px dashed black;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonChoiceCardImg = styled.img`
  width: 120px;
  height: 120px;
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
            <PokemonChoiceCard key={pokemon ? pokemon.uuid : index}>
              <PokemonChoiceCardImg
                src={
                  pokemon
                    ? pokemon.img_url
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                }
                alt={pokemon ? pokemon.korean_name : `몬스터볼`}
              />
              {pokemon && <span>{pokemon.korean_name}</span>}
              {pokemon && (
                <button onClick={() => removePokemon(pokemon.uuid)}>
                  삭제
                </button>
              )}
            </PokemonChoiceCard>
          );
        })}
      </PokemonChoiceCardList>
    </PokemonChoiceStyle>
  );
}

export default Dashboard;
