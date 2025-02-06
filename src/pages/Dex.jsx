import MOCK_DATA from "../components/MOCK_DATA";
import PokemonList from "../components/PokemonList";

function Dex({ setPokemonChoiceList, pokemonChoiceList }) {
  const maxPokemon = 6;

  const addPokemon = (e, id) => {
    e.stopPropagation();
    const duplicationPokemon = pokemonChoiceList.find(
      (pokemonChoice) => pokemonChoice.id === id
    );
    if (duplicationPokemon) {
      alert(
        `"${duplicationPokemon.korean_name}"은(는) 이미 선택된 포켓몬입니다.`
      );
      return;
    }
    MOCK_DATA.map((list) => {
      if (list.id === id) {
        if (pokemonChoiceList.length < maxPokemon) {
          setPokemonChoiceList([
            ...pokemonChoiceList,
            { ...list, uuid: crypto.randomUUID() },
          ]);
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
