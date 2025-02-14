import { useCallback, useEffect, useState } from "react"
import { cardByLevel } from "./constants"
import { shuffleArray } from "./utilities"
import { state } from "./constants"

export function Card({name, image, handleClick, pokemons, setPokemons, score, difficulty, gameState}) {
  const [clicked, setClicked] = useState(false)

  const updateScore = useCallback(() => {
      if (gameState !== state.inGame) return

      handleClick(clicked)
      setPokemons(shuffleArray(pokemons))
      setClicked(true)
  }, [gameState, pokemons, handleClick, setPokemons, setClicked, clicked])

  useEffect(() => {
    if (score === 0 && clicked) setClicked(false)
  }, [score, clicked, setClicked])

  const styleByLevel = cardByLevel[difficulty]

  return (
    <div onClick={updateScore} className="card" style={styleByLevel}>
      <div className="img-container">
        <img src={image} alt={`Pokemon Image ${name}`} />
      </div>

      <p className="pokemon-name">{name}</p>
    </div>
  )
}
