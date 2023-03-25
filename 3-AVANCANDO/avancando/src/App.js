//import CSS
import './App.css';

import City from './assets/city.jpg';
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
*/

