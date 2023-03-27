//import CSS
import {useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import MannageData from './components/MannageData';
import ShowUserName from './components/ShowUserName';
import Fragmentos from './components/Fragmentos';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

//   const name = "Joaquim";
  const [userName] = useState("Bacarinx");

  const cars = [
      {id: 1, brand: "Ferrari", color:"Yellow", newCar: true, km: 0},
      {id: 2, brand: "KIA", color:"White", newCar: false, km: 1180},
      {id: 3, brand: "Renault", color:"Blue", newCar: false, km: 1283}
  ]

  function showMessage() {
      console.log("Evento do componente Pai")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="Cidade paisagem" />
      </div>
      <MannageData />
      <ListRender />
      <CondicionalRender />
      {/* Props */}
      <ShowUserName name={userName}/>
      {/* Destructuring */}
      <CarDetails marca="VW" KM={100000} color="Azul" newCar={false}/>
      {/* Reaproveitamento */}
      {<CarDetails marca="Ford" KM={0} color="red" newCar={true}/>}
      {<CarDetails marca="Fiat" KM={5400} color="white" newCar={false}/>}
      {/* Loop em array de objetos */}
      {cars.map((car) => (
            <CarDetails marca={car.brand} color={car.color} KM={car.km} newCar={car.newCar}/>
      ))}
      {/* Fragments */}
      <Fragmentos propFragments="Teste" />
      {/* Children */}
      <Container>
            <p>Este é o conteudo</p>
      </Container>
      {/* Executar prop */ }
      <ExecuteFunction  />
    </div>
  );
}

export default App;

/*    Imagens Em React

1 - usando img na public: Basta utilizar a tag img, e no src colocar "/" e em seguida o nome da imagem Ex: /img1.jpg

2-Usando img na assets: temos que importar a img (import [name] from [arquivo img]) e na parte do src utilizar uma interpolação de chaves com o nome da img importada ex: src = {City}

      Hooks
                  
1- Todos os hooks começam com "use" ex: useState

2- os Hooks precisam ser importados 

3- podemos criar nossos proprios hooks, isso é chamado do custom hook


      useState hook do react

1- Para utilizar o hook, precisamos primeiro importar ele do proprio react:
import {useState} from 'react';

2- O hook de useState serve para poder visualizar a alteração de um valor variado dentro de um campo por exemplo. ex: 15 para 30, true para false, etc;

3- podemos criar um valor inicial para o state inicial:
const [NameState, UseNameState] = useState([valor inicial]); 

ex: const [number, useNumber] = useState(30); 

4- Para alterar esse valor posteriormente, basta chamar a função set com o novo valor:
setState(55) --> exemplo 

      Renderização de listas 

1- Podemos colocar uma lista através de JSX e  de um array na página do projeto

2- temos que criar uma constante (array), com as caracteristicas de um useState(), e acrescentar elementos a ele

3- Agora criamos uma lista não ordenada (ul) e percorremos cada elemento dela a partir de um map();

4- Quando colocamos um objeto no JSX, diferente do JS, sua sintaxe é de parenteses () e não chaves {};

5- Durante a renderizção das listas, cada elemento precisa de uma key, ela é colocada no attr da (li);

6- Podemos adicionar uma key a partir do código de um produto ou qualquer indentificador único, gerado a partir de um banco de dados ou de um objeto.

EX: <li key = {user.id}> {user.name} - {user.age} </li>

      Previous States

1 - previous states se refere ao valor atual dentro de um set de dados

2 - O prev state é o primeiro parametro identificado dentro do set()
Ex: setUsers(prevUsers) 

3 - O prev state é muito utilizado para modificar listas, pois temos o valor antigo, e o transformamos em um novo valor

      Conditional Render

1 - Podemos deixar aparente ou não uma div apartir do valor de um state por exemplo, que atenda a uma condição pré setada

2 - Sua sintaxe é dada a partir de &&
EX: {var && <p>Valor da variavel = false</p>}
EX: {!var && <p>Valor da variavel = false</p>}

3- Em caso de if e else, vamos utilizar a estrutura de operador Ternário

Ex: {var === 10 ? (<p>valor é 10</p>) : (<p>Valor não é 10</p>)}

      Props

1 - Props é um recurso fundamental que nos permite passa valores de um componente pai para um componente filho

2- AS props vem em um objeto no argumento da função do componente, ou seja, na hora de importar um componente, podemos usar qualquer propriedade.
Ex: <ShowUserName name= {username} />

3 - e no arquivo ShowUserName podemos utilizar esse attr name apartir de uma notação ponto:

  -Primeiro passamos a prop como parametro da função
  - Depois podemos usar ela como um objeto

Ex: <h1> O nome de usuário é: {props.name} </h1>

      Destructuring em props

1- Em grandes prejetos é comum os devs desestruturarem as props, pois geralmente possuem muitas props em um projeto;

2- Com a desestruturação, o dev não precisa colocar props.ALgumaCoisa, basta colocar o nome da prop direto

3- Para fazer a destruturação temos que trocar o parametro Props por um objeto de itens

Ex não desestruturado: corDetails(props)
Ex desestruturado: corDetails({name, cor, modelo})

OBS: os nomes dos itens do objeto, precisam ser os mesmos passados como propriedade na importação do componente

      Reutilização com Loop

1 - Os arrays podem conter muitos itens

2- O correto é utilizar uma estrutura de loop(MAP) para sua exibbição

3- Com isso vamos conciliar os três conceitos: Renderização de listas, reaproveitamento de componentes e props

      React Fragments

1 - Eles são interessantes para quando precisamos ter mais de um elemento pai em um componente

2- Criamos a Tag vazia <> ... </>

3- Ela não altera a estrutura do HTML como uma div.

      Children

1- Com esta propriedade, podemos inserir html na própria chamada do componente

2- Para poder fazer isso, na hora de desestruturar as props, como primeiro valor passamos "children", logo tudo oque inserirmos na chamada do componente estará para uso na propriedade "children"
*/

