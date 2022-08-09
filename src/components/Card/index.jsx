import './styles.css'

export function Card(props) {
  return(
    <div className="card">
      <img src={props.image} alt="Character image" />
      <h2>Name: {props.name}</h2>
      <h2>House: {props.house}</h2>
    </div>
  )
}