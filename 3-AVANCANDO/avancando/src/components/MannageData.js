import {useState} from 'react'

const MannageData = () => {
    let someData = 15;

    const [number, setNumber] = useState(30); 

    return (
        <div>
            <div>
                <p>Valor some Data: {someData}</p>
                <button onClick={() => (someData = 20)}>CLique para alterar o valor</button>
            </div>
            <div>
                <p>Valor com o useState: {number}</p>
                <button onClick = {() => setNumber(50)}>Clique para mudar o state</button>
            </div>
        </div>
    )
}

export default MannageData