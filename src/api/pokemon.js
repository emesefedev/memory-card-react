import { generateRandomNumbers } from '../utilities';

const pokemonAPI = import.meta.env.VITE_POKEAPI

async function getPokemon(id) {
  const url = new URL(pokemonAPI)
  url.pathname += `pokemon/${id}`
  const response = await fetch(url)
  const data = await response.json()
  return {
    id: id,
    name: data.name,
    image: data.sprites.front_default
  }
}

 export async function fetchNPokemons(amount) {
    const randomNumbers = generateRandomNumbers(amount, 151)

    return Promise.all(randomNumbers.map(async id => {
      return getPokemon(id)
    }))
  }
  