import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "PEdro", "Josias"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Henrique", age: 18},
        {id: 3, name: "João", age: 22},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * users.length);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== randomNumber)
        })
    }

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
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
    )
}

export default ListRender