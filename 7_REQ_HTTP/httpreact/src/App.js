import './App.css';

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  //1 - resgatando dados
  useEffect(() => {
    async function fetchData() {

      const res = await fetch(url)

      const data = await res.json()
      
      setProducts(data)
     }

     fetchData()
  }, [])

  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault() //remove o evento padrão dos formulários

    const product = { //cria um array produtos setando nome e preço padrão do useState criado acima
      name,
      price,
    }

    const res = await fetch(url, { //criando a res para o back-end
      method: "POST", //definindo o método para adicionar produto
      headers: { 
        "Content-Type": "application/json" //Transmitir o tipo de conteudo que estamos manipulando 
      },
      body: JSON.stringify(product) //transformando o body em JSON
    })

    //3 - Carregamento dinâmico
    const addedProduct = await res.json() //transformando o Json em objeto 

    setProducts((previousProducts) => [...previousProducts, addedProduct])

    setName('')
    setPrice('')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;

/* 
      UseEffect hook

1- Ele faz com que determinada ação seja executada somente uma vez

2 - Impede a re-renderização automatica do react

3- Ele possui um ARRAY DE DEPENDÊNCIAS, que deve contem os dados que ativem a execução da função de forma automatica

4- ele sempre está presente nas REQUISIÇÕES ASSINCRONAS

      Resgatando Dados com React

1 - Precisamos ter um local para salvá-los (useState)

2 - Renderizar apenas uma vez a chamada da API (useEffect)

3 - Um meio de fazer a requisição assincrona (fetch API). EX: const res = await fetch(url)

4 - após inserir o fetch, podemos deixar em uma variavel, os resultados dos produtos em .json. EX: const data = await res.json()

      Adicionando Dados

1 - Para adicionar um item, precisamos resgatar os dados do form com o useState()

2 - Temos que reunir eles em uma função após o submit e enviar um request de POST para a nossa API

3 - Primeiro criamos as variaveis dos principais itens com o useState (name e price)

4 - após isso, criamos uma handleSubmit, que vai capturar o evento de click no botão do formulário. Nela deve haver: 
  - e.preventDefault()
  - Um array de produto que será mandado para o back-end
  - uma resposta ao back-end com 3 campos: Method, tipo de dado manipulado, e transformar o body em JSON
  
      Carregamento de dados dinâmicos

1 - Primeiro para criar os dados dinâmicos (inserir o dado digitado pelo usuário no array de produtos direto), precisamos:
  -Tranforma o dado vindo em Json para Objeto: const addedProduct = res.json()

  -logo em seguida setamos no array de produto esse novo valor, mas mantendo os valores antigo com o operador rest:
  EX - setProducts((actualProduct) => [...actualProduct, addedProduct])

*/