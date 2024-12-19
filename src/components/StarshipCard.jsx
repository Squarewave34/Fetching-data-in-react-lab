const StarshipCard = ({starShip, index}) => {
  return (
    <section key={index}>
      <h1>{starShip.name}</h1>
      <p>starship class: {starShip.starship_class}</p>
      <p>starship manufacturer: {starShip.manufacturer}</p>
      <p>starship model: {starShip.model}</p>
    </section>
  )
}

export default StarshipCard