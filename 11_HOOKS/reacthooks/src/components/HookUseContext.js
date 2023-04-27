import { createContext } from "react" //importando o createContext para poder criar nosso contexto

export const SomeContext = createContext() //Nome do nosso Contexto

export const HookUseContext = ({children}) => {

    const contextValue = "Testando contexto"

    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
    )

}