import MOCK_DATA from "../components/MOCK_DATA";
import PokemonList from "../components/PokemonList";

function Dex({ setPokemonChoiceList, pokemonChoiceList }) {
  const maxPokemon = 6;

  const addPokemon = (e, id) => {
    e.stopPropagation();
    MOCK_DATA.map((list) => {
      if (list.id === id) {
        if (pokemonChoiceList.length < maxPokemon) {
          setPokemonChoiceList([
            ...pokemonChoiceList,
            { ...list, uuid: crypto.randomUUID() },
          ]);
          console.log(
            "🚀 ~ MOCK_DATA.map ~ pokemonChoiceList:",
            pokemonChoiceList
          );
        } else {
          alert("모든 포켓몬이 이미 선택되었습니다.");
          return;
        }
      }
    });
  };

  return (
    <>
      <PokemonList addPokemon={addPokemon} />
    </>
  );
}

export default Dex;
