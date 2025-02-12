import { useState } from "react"

export function Card({name, image, handleClick}) {
  const [clicked, setClicked] = useState(false)

  function updateScore(clikedCard) {
    handleClick(clikedCard)
    setClicked(true)
  }

  return (
    <div onClick={() => updateScore(clicked)} className="card">
      <div className="img-container">
        <img src={image} alt="Pokemon Image" />
      </div>

      <p className="pokemon-name">{name}</p>
    </div>
  )
}
