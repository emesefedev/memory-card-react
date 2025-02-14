import { useState } from "react"
import { Cards } from "./Cards"
import { totalCards } from "./constants"
import { DifficultyButtons } from "./DifficultyButtons"
import { Info } from "./Info"

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameState, setGameState] = useState("selectingLevel") // selectingLevel, inGame, win, gameOver
  const [difficulty, setDifficulty] = useState(0) // 0: easy, 1: medium, 2: hard

  function updateHighScore(newScore) {
    if (newScore > highScore) setHighScore(newScore)
  }

  const updateScore = (clikedCard) => {
    if (!clikedCard) {
      setScore(score + 1)
      if (score + 1 === totalCards[difficulty]) {
        setGameState("win")
        setTimeout(() => {
          setGameState("selectingLevel")
        }, "3000");
      }
    } else {
      setGameState("gameOver")
      setScore(0)
      updateHighScore(score)
      setTimeout(() => {
        setGameState("selectingLevel")
      }, "3000");
    }  
  }

  const selectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    setGameState("inGame")
  }
  
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>POKEMON MEMORY GAME</h1>
        <Info score={score} highScore={highScore} gameState={gameState}></Info>
        { gameState === "selectingLevel"
          ? <DifficultyButtons selectDifficulty={selectDifficulty}></DifficultyButtons>
          : <Cards handleClick={updateScore} score={score} difficulty={difficulty} gameState={gameState}></Cards>
        }
      </div>
    </>
  )
}
