export function Info({isFirstPlay = true}) {

  return (
    <>
      { 
        isFirstPlay 
        ?  <p className="instructions">{"Get points by clicking on an image, but don't click on any more than once!"}</p>
        : <div className="score">
            <p><span className="text-bold">Score:</span> 0</p>
            <p><span className="text-bold">High Score:</span> 0</p>
          </div>
      }  
    </>
  )
}
