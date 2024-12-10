// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetailsItem} = props
  const {name, imageUrl, description} = planetsDetailsItem
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h2 className="planet-name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
