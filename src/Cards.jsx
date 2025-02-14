
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { cardsGridByLevel, totalCards } from './constants';
import { fetchNPokemons } from './api/pokemon';


export function Cards({handleClick, score, difficulty, gameState}) {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

 
  useEffect(() => {
    setIsLoading(true)
    fetchNPokemons(totalCards[difficulty])
    .then((savedPokemons) => {
      console.log(savedPokemons.length)
      setPokemons(savedPokemons)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      setIsLoading(false)
   })
}, [difficulty]);

  const styleByLevel = cardsGridByLevel[difficulty]
  
  return (
    <>
      {isLoading
        ? <p>Loading...</p>
        : <div className="cards-grid" style={styleByLevel}>
          {pokemons.map((p) => (
            <Card 
              key={p.id} 
              name={p.name} 
              image={p.image} 
              handleClick={handleClick} 
              pokemons={pokemons} 
              setPokemons={setPokemons}
              score={score}
              difficulty={difficulty}
              gameState={gameState}>  
            </Card>
          ))}
        </div>
      }
    </>
  );
};
