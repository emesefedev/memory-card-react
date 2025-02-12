export function Info({score, highScore}) {

  const isFirstPlay = score === 0 && highScore === 0

  return (
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
  )
}
