const CarDetails = ({marca, KM, color, newCar}) => {

  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {KM}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>} 
    </div>
  )
}

export default CarDetails