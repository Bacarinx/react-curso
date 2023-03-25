//import CSS
import './App.css';

import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import MannageData from './components/MannageData';

function App() {
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
    </div>
  );
}

export default App;

/*                   Imagens Em React

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
*/

