import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

const Team = () => {

  const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
      <h1>Team</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Team