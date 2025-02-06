import PokemonList from "../components/PokemonList";

function Dex({ addPokemon }) {
  return (
    <>
      <PokemonList addPokemon={addPokemon} />
    </>
  );
}

export default Dex;
