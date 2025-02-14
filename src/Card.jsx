import { useState } from "react"
import { cardByLevel } from "./constants"
import { shuffleArray } from "./utilities"

export function Card({name, image, handleClick, pokemons, setPokemons, score, difficulty, gameState}) {
  const [clicked, setClicked] = useState(false)

  function updateScore(clikedCard) {
    if (gameState !== "inGame") return

    handleClick(clikedCard)
    setPokemons(shuffleArray(pokemons))
    setClicked(true)
  }

  if (score === 0 && clicked) setClicked(false)

  const styleByLevel = cardByLevel[difficulty]

  return (
    <div onClick={() => updateScore(clicked)} className="card" style={styleByLevel}>
      <div className="img-container">
        <img src={image} alt="Pokemon Image" />
      </div>

      <p className="pokemon-name">{name}</p>
    </div>
  )
}
