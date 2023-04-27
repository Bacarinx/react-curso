import {  useEffect, useState } from 'react'

const HookUseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado")
    }, )

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    //2 - array de dependencias vazio
    useEffect(() => {
        console.log("serei executado apenas uma vez")
    }, [])

    // 3 - item do array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda")
        }
    }, [anotherNumber])

    const alterAnotherNumber = () => {
        setAnotherNumber(anotherNumber + 1)
    }

    //4 - cleanup do useEffcet
    useEffect(() => {

        // const timer = setTimeout(() => {
        //     console.log("Hello world")

        //     setAnotherNumber(anotherNumber + 1)
        // }, 2000)

        // return () => clearTimeout(timer) //sistema de limpeza

    }, [anotherNumber])

    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Incrementar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={alterAnotherNumber}>Mudar AnotherNumber!</button>
            <hr />
        </div>
    )
}

export default HookUseEffect