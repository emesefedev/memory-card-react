import { useState } from "react"
import { Cards } from "./Cards"
import { totalCards } from "./constants"
import { DifficultyButtons } from "./DifficultyButtons"
import { Info } from "./Info"
import { state } from "./constants"

export default function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameState, setGameState] = useState(state.selectingLevel)
  const [difficulty, setDifficulty] = useState(0) // 0: easy, 1: medium, 2: hard

  function updateHighScore(newScore) {
    setHighScore(prevScore => {
      return Math.max(prevScore, newScore)
    })
  }

  const updateScore = (clikedCard) => {
    if (!clikedCard) {
      setScore(score + 1)
      if (score + 1 === totalCards[difficulty]) {
        setGameState(state.win)
        setTimeout(() => {
          setGameState(state.selectingLevel)
        }, 3000);
      }
    } else {
      setGameState(state.gameOver)
      setScore(0)
      updateHighScore(score)
      setTimeout(() => {
        setGameState(state.selectingLevel)
      }, 3000);
    }  
  }

  const selectDifficulty = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    setGameState(state.inGame)
  }
  
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>POKEMON MEMORY GAME</h1>
        <Info score={score} highScore={highScore} gameState={gameState}></Info>
        { gameState === state.selectingLevel
          ? <DifficultyButtons selectDifficulty={selectDifficulty}></DifficultyButtons>
          : <Cards handleClick={updateScore} score={score} difficulty={difficulty} gameState={gameState}></Cards>
        }
      </div>
    </>
  )
}
