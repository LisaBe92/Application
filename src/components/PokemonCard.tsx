interface PokemonTypes {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

export default function PokemonCard({ pokemon }: PokemonTypes) {
  return (
    <figure>
      {pokemon.imgSrc && pokemon.name ? (
        <div>
          <img src={pokemon.imgSrc} alt={"pictur"} /> <p>{pokemon.name}</p>
        </div>
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}
