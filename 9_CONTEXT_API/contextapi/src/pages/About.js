import ChangeCounter from "../components/ChangeCounter"

//hook
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {

  const {counter} = useCounterContext() //destructuring

  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default About