// 1 - criando contexto
import { createContext, useState } from "react";

// 2 - criar provrider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )

}

export const CounterContext = createContext()