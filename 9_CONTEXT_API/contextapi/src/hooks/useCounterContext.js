import { useContext } from "react"; //import padrão do context
import { CounterContext } from "../context/CounterContext"; //importando meu context

export const useCounterContext = () => {

    const context = useContext(CounterContext)

    if(!context) {
        console.log("Contexto não encontrado")
    }

    return context;

}

