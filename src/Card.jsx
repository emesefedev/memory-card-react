import { useState } from "react"
import { shuffleArray } from "./utilities"

export function Card({name, image, handleClick, pokemons, setPokemons, score}) {
  const [clicked, setClicked] = useState(false)

  function updateScore(clikedCard) {
    handleClick(clikedCard)
    setPokemons(shuffleArray(pokemons))
    setClicked(true)
  }

  if (score === 0 && clicked) setClicked(false)

  return (
    <div onClick={() => updateScore(clicked)} className="card">
      <div className="img-container">
        <img src={image} alt="Pokemon Image" />
      </div>

      <p className="pokemon-name">{name}</p>
    </div>
  )
}
