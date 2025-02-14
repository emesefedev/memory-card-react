export function DifficultyButtons({selectDifficulty}) {
  

  return (
    <div className="flex flex-col gap-8 mtop-16">
      <button className="difficulty-button" onClick={() => selectDifficulty(0)}>Easy</button>
      <button className="difficulty-button" onClick={() => selectDifficulty(1)}>Medium</button>
      <button className="difficulty-button" onClick={() => selectDifficulty(2)}>Hard</button>
    </div>
  )
}
