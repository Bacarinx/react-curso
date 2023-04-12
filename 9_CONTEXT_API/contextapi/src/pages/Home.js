// import { useContext } from "react"
// import {CounterContext} from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {

  const {counter} = useCounterContext() //destructuring

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Home