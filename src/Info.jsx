import { state } from "./constants"

export function Info({score, highScore, gameState}) {

  const isFirstPlay = score === 0 && highScore === 0

  return (
    <>
      {gameState === state.selectingLevel && <p className="instructions">Select a level of difficulty:</p>}
      {
        gameState === state.inGame && 
        <>
          { 
            isFirstPlay 
            ?  <p className="instructions">{"Get points by clicking on an image, but don't click on any more than once!"}</p>
            : <div className="score">
                <p><span className="text-bold">Score:</span> {score}</p>
                <p><span className="text-bold">High Score:</span> {highScore}</p>
              </div>
          }
        </>
      } 
      {gameState === state.win && <p className="game-over-text">Congratulations! You won!</p>}
      {gameState === state.gameOver && <p className="game-over-text">GAME OVER</p>}
    </>
  )
}
