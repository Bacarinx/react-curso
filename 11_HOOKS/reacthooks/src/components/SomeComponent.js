import {forwardRef, useRef, useImperativeHandle} from 'react'

const SomeComponent = forwardRef((props, ref) => { //usamos o forwardRef para receber as props e a ref do componente pai, que neste caso 

    const localInputRef = useRef()
    
    useImperativeHandle(ref, () => {
        return {
            validate: () => {
                if(localInputRef.current.value.length > 3) {
                    localInputRef.current.value = ""
                }
            }
        }
    })

  return (
    <div>
        <p>Insira no máximo 3 caracteres</p>
        <input type="text" ref={localInputRef}/>
    </div>
  )
})

export default SomeComponent
