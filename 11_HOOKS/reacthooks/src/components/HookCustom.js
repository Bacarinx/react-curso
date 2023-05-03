import React from 'react'
import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const numberPreviouValue = usePrevious(number)

  return (
    <div>
        <h2>Custom Hook</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {numberPreviouValue}</p>
        <button onClick={() => setNumber(number + 1)}>Aumentar</button>
        <hr />
    </div>
  )
}

export default HookCustom