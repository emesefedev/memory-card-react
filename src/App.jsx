import { Info } from "./Info"
import { Cards } from "./Cards"
import { useState } from "react"


export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  function updateHighScore(newScore) {
    if (newScore > highScore) setHighScore(newScore)
  }

  const updateScore = (clikedCard) => {
    if (!clikedCard) {
      setScore(score + 1)
      if (score + 1 === 8) console.log("WIN")
    } else {
      console.log("GAME OVER")
      setScore(0)
      updateHighScore(score)
    }  
  }

  

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>POKEMON MEMORY GAME</h1>
        <Info score={score} highScore={highScore}></Info>
        <Cards handleClick={updateScore} score={score}></Cards>
      </div>
    </>
  )
}
