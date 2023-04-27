import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
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

*/
