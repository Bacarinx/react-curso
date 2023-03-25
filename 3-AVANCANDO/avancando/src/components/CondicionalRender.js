import { useState } from "react"

const CondicionalRender = () => {

    const [x] = useState(true)

    const [name, setName] = useState("Matheus")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>} {/* Só será imprimido o paragrafo caso x seja true */}
        <h1>If Ternário</h1>
        {name === "joão" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>O nome não é João</p>
            </div>
        )}
        <button onClick={() => setName("joão")}>Clique aqui!</button>
    </div>
    )
}

export default CondicionalRender