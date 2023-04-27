import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

import { HookUseContext } from './components/HookUseContext';

function App() {
  return (
    <div className="App">
      <HookUseContext>
      <h1>React Hooks</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;

/* 
              useState
1 - Tem o propósito de GERENCIAR VALORES
2- Podemos consultar e alterar um valor
3 - Isso nos permite re-renderizar um componente, o que não acontece com a minipulação de variáveis
4-No input, podemos alterar o state dele com a função onChange()
5 - Limpeza de inputs (controlled Input)
6 - Após preenchimento total do from, unir os states e fazer um envio dos dados para o back-end


              useReducer
1 - Tem a mesma função que useState, ele gerencia valores
2 - Porém temos a possibilidade de executar uma função na hora de alteração do valor
3 - Então temos que o useReducer recebe UM VALOR para gerenciar e uma função para alterar este valor
4 - O reducer geralmente contém operações mais complexas, utilizando a estrutura SWITCH com Actions


              useEffect
1 - Com ele podemos realizar desde alterações na DOM até requisições HTTP
2 - Com ele, conseguimos controlar quando e quantas vezes uma ação acontece
3 - a sintaxe é formada por uma função a ser executada e um array de dependencias

4 - (sem array de dependencias) --> neste caso a função será executado sempre que o componente for re-renderizado

5 - (array de dependencia VAZIO) --> Neste caso a função só será executada na primeira vez quando a página for re-renderizada 

6 - (array com valor) --> Executa só quando o valor que estiver dentro das dependências for alterado

7 - Técnica do cleanup (limpeza) --> Fazemos isso para não ter erros indesejados
Ex: um timeout que ao mudar de página pode continuar a ser executado, por falta de limpeza


              useContext
1 - O useContext é um hook utilizado para consumir um contexto do COntext API
2 - Precisamos criar o contexto e também o provider
3 - Enolver os componentes que receberão os valores compartilhados
4- ele serve também como diminuição de código pois um contexto pode ser passado para vários componentes sendo necessário mudar apenas um arquivo


              useRef
1 - o useRef pode ser utilizado com useState 
2 - porém, ele é um objeto, e seu valor está na propriedade current
3 - outra particularidade é que ele não re-renderiza o componente ao ser alterado
4 - Podemos accesá-lo apartir de o nome do ref + .current
ex: "counter.current"
5 - Usamos o useRef gerlmente quando precisarmos alterar algum estado dentro de uj useEffect, pois se usarmos o useState, ficará um looping infinito

6 - useRef e DOM
    -O use Ref pode ser utilizado para selecionar elementos do JSX
    -Com isso podemos fazer majipulações de DOM ou aplixar funções como a Focus, que foca no input
    -Este é um outro uso muito interessante do Hook


              useCallBack
1 - Ele basicamente memoriza uma função, fazendo ela NÃO ser recontruida a cada renderização de um componente
2 - Ele pode ser utilizado em duas situações:

    1° caso: Quando estamos prezando pela performance, então queremos que uma função muito complexa não seja reconstruída toda vez;

    2° caso: É quandoo próprio REACT nos indica que uma função deveria estar contida em um useCallback, para evitar problemas de performance;
  
*/
