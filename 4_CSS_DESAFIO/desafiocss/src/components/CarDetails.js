import styles from "./CarDetails.module.css"

const CarDetails = ({modelo, ano, km, newCar}) => {
  return (
    <ul className={styles.NewCar}>
        <li>Modelo: {modelo}</li>
        <li>Ano: {ano}</li>
        <li>KM: {km}</li>
    </ul>
  )
}

export default CarDetails