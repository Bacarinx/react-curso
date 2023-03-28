import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* Criação de Form */}
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Digíte o seu nome"/>
            </div>
            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default MyForm