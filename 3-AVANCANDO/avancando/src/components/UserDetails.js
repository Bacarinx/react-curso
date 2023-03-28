const UserDetails = ({nome, idade, profissao}) => {
  return (
        <div>
            <h2>Informações pessoais</h2>
            <ul>
                <li>nome: {nome}</li>
                <li>idade: {idade}</li>
                <li>profissão: {profissao}</li>
            </ul>
            {idade >=18 && <p>Pode tirar carteira</p>}
        </div>
  )
}

export default UserDetails