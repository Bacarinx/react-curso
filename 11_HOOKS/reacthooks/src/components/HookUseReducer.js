import { useReducer, useState } from "react"

export const HookUseReducer = () => {
    //1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state).toFixed(3)*1000
    })
    //state = valor atual -> neste caso é o "number"
    //dispath = função que será alterado o valor atual "number"

    // 2 - avançando no useReducer
    const initialTasks = [ //iniciamos um objeto de tasks
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"}
    ]

    const [taskText, setTaskText] = useState("") //useState para texto da task

    const taskReducer = (state, action) => { //criamos uma função com o state(valor atual) e o action (cada ação isolada representa uma função diferente)
        switch (action.type) {
            case "ADD": //se action.type == "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }
                setTaskText("") 
                return  [...state, newTask] //retorna o valor antigo + o novo

            case "DELETE":
                return state.filter((task) => task.id !== action.id)

            default:
                return state;
        }
    }

    //Estrutura reducer:
    //1° param antes do reducer (tasks)-> valor atual (state)
    //2° param antes do reducer (dispatchTasks)-> chama a função de acordo com o valor passado

    //1° param depois do reducer (taskReducer)-> função que setamos os valores para o dispatch
    //2° param depois do reducer (initialTasks)-> valor inicial do objeto
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)
    

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id: id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar Número</button>
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText}/>
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => (
            <li onDoubleClick={() => removeTask(task.id)} key={task.id}>{task.text}</li>
        ))}
        <hr />
    </div>
  )
}
