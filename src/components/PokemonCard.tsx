export default function PokemonCard({pokemon}) {

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
