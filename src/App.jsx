import { Info } from "./Info"
import b from "./Images/1.png";

export default function App() {

  return (
    <>
      <div className="flex flex-col gap-8">
        <h1>POKEMON MEMORY GAME</h1>
        <Info></Info>

        <div className="cards-grid">
          <div className="card">
            <div className="img-container">
              <img src={b} alt="Pokemon Image" />
            </div>

            <p className="pokemon-name">Bulbasaur</p>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>

      
    </>
  )
}
