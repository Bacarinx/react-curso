import './MyForm.css'

import {useState} from "react"

const MyForm = ({user}) => {
  //6 - Controlled Input
  //3 - Gerenciamento de dados 
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')
  const [bio, setBio] = useState(user? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')


  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)
  console.log(email)
  console.log(bio)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("enviando o form")
    console.log(name, email, bio, role)

    // 7 - limpar forms
    setName("")
    setEmail("")
    setBio("")
  }

  return (
    <div>
        {/*5- Envio de Form */}
        {/*1- Criação de Form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Digíte o seu nome" onChange={handleName} value={name}/>
                {/* 2- Label envolvendo Input */}
            <label>
              {/* 4- Simplificação de manipulação de state */}
              <span>E-mail:</span>
              <input type="email" name="email" placeholder="Digíte sei email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8 - textArea */}
            <label>
              <span>BIO:</span>
              <textarea name="" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9- select */}
            <label>
              <span>função no sistema:</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Adiministrador</option>
              </select>
            </label>
            </div>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm