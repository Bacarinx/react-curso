const CarDetails = ({marca, KM, color}) => {

  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {KM}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails