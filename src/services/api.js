export const fetchPokemon = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch Pokémon');
  const data = await response.json();
  // Fetch images for each Pokémon
  const items = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();
      return {
        name: pokemon.name,
        image: details.sprites.front_default,
      };
    })
  );
  return { items, total: data.count };
};
