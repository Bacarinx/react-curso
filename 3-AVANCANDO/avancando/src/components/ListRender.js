import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "PEdro", "Josias"])

    const [users] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 658382, name: "Henrique", age: 18},
        {id: 869476, name: "João", age: 22},
    ])

    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
    )
}

export default ListRender