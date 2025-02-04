import PokemonCard from "./PokemonCard";

function PokemonList({ addPokemon }) {
  return (
    <div>
      <PokemonCard addPokemon={addPokemon} />
    </div>
  );
}

export default PokemonList;
