export function Card({name, image}) {

  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt="Pokemon Image" />
      </div>

      <p className="pokemon-name">{name}</p>
    </div>
  )
}
