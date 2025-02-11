import { Info } from "./Info"
import { Cards } from "./Cards"


export default function App() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>POKEMON MEMORY GAME</h1>
        <Info></Info>
        <Cards></Cards>
      </div>
    </>
  )
}
