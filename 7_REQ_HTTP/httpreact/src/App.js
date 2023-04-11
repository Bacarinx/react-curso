import './App.css';

import { useState, useEffect} from 'react'

//4 - custom hook
import { useFetch } from "./hooks/useFetch" //importando o custom hook

const url = "http://localhost:3000/products"

function App() {

  //4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 2 - Add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault() //remove o evento padrão dos formulários

    const product = { //cria um array produtos setando nome e preço padrão do useState criado acima
      name,
      price,
    }

    httpConfig(product, "POST")

    setName('') //resetando o campo nome depois da requisição
    setPrice('') //resetando o campo preço depois da requisição
  }

  // 8 - removendo produto
  const handleDelete = (id) => {
    httpConfig(id, "DELETE")
  }


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - {product.price} <button onClick={() => handleDelete(product.id)}>Deletar</button></li>
        ))}
      </ul>
      )}
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
          {/* 7 - state de Loading no Post */}
          {!loading && <input type="submit" value="Criar"/>}
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

      Custom hook para resgate de dados

1 - Primeiro criamos na pasta "hooks", o nosso arquivo que servirá como hook

2- Logo em seguida, colocamos nosso código desejado à ele, nesse calo o nosso hook vai ter a mesma função da add de dados no arquivo json

3 - logo em seguida exportamos ele para o App.js

      Refatorando o POST

1 - Utilizamos o mesmo hook para incluir uma etapa de POST

2 - Criamos un NOVO useEffect que mapeia outra mudança de estado

3 - Após ela ocorrer executamos a adição de produto

      Loading 

1 - O estado de loading funciona como o intervalo entre as requisições feitas e seus envios até o usuário;

2- Para criar o estado de loading precisamos criar uma variável de loading e setLoading, e iniciamos ela como false, ja que não está carregando nada ainda;

3- No começo de cada reuisição alteramos o setLoading para true, o no final (quando é recebido os dados) o estado passa a ser falso denovo

4- Diante desses estados podemos criar estruturas de decisões a partir desse valor no app principal

      Tratamento de erros

1 - O tratamento de erros é utilizado da mesma maneira que o estado loading, porém ele é formulado pelo try e catch
*/