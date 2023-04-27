import { useState } from "react"

const HookUseState = () => {
    //1 - useState
    let userName = "João"

    const [name, setName] = useState("Henrique")

    const changeNames = () => {
        userName = "João Souza"
        setName("Henrique Bacarin")
    }

    //2 - useState em input's
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        //envio a uma API
        console.log(age)
    }

  return (
    
    <div>
        {/* 1 - UseState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar Nomes</button>
        
        {/* 2 - useState em input's */}
        <p>Digíte a sua idade</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit" value="Enviar"/>
        </form>
        <p>Você tem {age} anos!</p>
        <hr/>
    </div>
  )
}

export default HookUseState