
import { useState, useEffect } from 'react';
import { Card } from './Card';
import { generateRandomNumbers } from './utilities';

const pokemonAPI = "https://pokeapi.co/api/v2/"

export function Cards({handleClick}) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  async function fetchAllPokemons() {
    const randomNumbers = generateRandomNumbers(8, 151)
    let savedPokemons = [] 

    for (let i = 0; i < randomNumbers.length; i++) {
      const id = randomNumbers[i]
      fetch(`${pokemonAPI}/pokemon/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const pokemon = {
          id: id,
          name: data.name,
          image: data.sprites.front_default
        }
        savedPokemons.push(pokemon)
      });
    }
    return savedPokemons
  }
  
  useEffect(() => {
    fetchAllPokemons()
    .then((savedPokemons) => {
      setPokemons(savedPokemons)
    })
    .then(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, "1500");      
    })
  }, []);
  
  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        : <div className="cards-grid">
          {pokemons.map((p) => (
            <Card key={p.id} name={p.name} image={p.image} handleClick={handleClick}></Card>
          ))}
        </div>
      }
    </>
  );
};
