import MOCK_DATA from "./MOCK_DATA";

// {
//   img_url:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//   korean_name: "뮤츠",
//   types: ["에스퍼"],
//   id: 150,
//   description: "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다.",
// },

function PokemonCard({ addPokemon }) {
  return (
    <div>
      {MOCK_DATA.map(({ img_url, korean_name, id }) => (
        <div key={id}>
          <img src={img_url} alt={korean_name} />
          <div>
            {korean_name}
            <p>No. {id}</p>
            <button onClick={() => addPokemon(id)}>추가</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
