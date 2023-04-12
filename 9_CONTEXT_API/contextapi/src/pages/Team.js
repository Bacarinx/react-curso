import ChangeCounter from "../components/ChangeCounter"

//hook
import { useCounterContext } from "../hooks/useCounterContext"

const Team = () => {

  const {counter} = useCounterContext() //Destructuring

  return (
    <div>
      <h1>Team</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Team