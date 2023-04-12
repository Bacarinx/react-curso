import './App.css';

//react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Navigate</h1>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;

/*
                                Aplicando um context em geral

Para aplicar um context em geral utilizamos 4 passos

1 passo - Criação do context, importando no arquivo o "createContext"

2 passo - Passando as informações necessarias que queremos exportar dentro do provide

3 passo - importar o context em outros arquivos, importando o "useContext" e o proprio contexto "myContext", e desestruturar ele em seguida

4 passo - Alterar o valor do provide 

OBS: Podemos refatorar o context com um hook, e na chamada do context não precisamos importar o useCOntext e o context, apenas o hook
*/



/*
            Context
-Primeiro vamos ter que criar o context

-Sempre deve ter a primeira letra maiuscula, e geralmente termina em Context: ex--> SomeCOntext.js

-Deixamos a pasta context em stc

-Onde formos utilizar o valor do context, o arquivo precisa ser importado

            Provider
-Ele vai delimitar onde o contexto é utilizado

-Vamos criar uma espécie de componente com a prop Children

-O provider deve encapsilar os demais componentes em que precisamos consultar ou alterar o valor;

-FIca em App.js ou index.js

-Poderemos compartilhar o valor do contexto em todos os componentes

            Alterando o COntexto
-Precisamos criar um componente que utilize a função de mudanca de contexto

-Ele ocorre no COntext e poderá ser consumida por todos os componentes que recebem o contexto

-Assim finalizamos o ciclo do context API

            Refatorando Context com hook
- Podemos criar um hook para utilizar o contexto, isso nos da algumas vantagens

- Não precisamos importar o useContext em todos os lugares, somente o Hook;

- Temos um espaco para fazer uma validação do contexto;
          

            Context mais complexo
- Context mais ocmplexos podem ter variações no comportamento

- Vamos utilizar o hook chamado useReducer

- Parecido com o useState, porém para controle de dados complexos

- Nele teremos diferentes ações com um switch

- Na aplicação vamos consumir o estado atual do dado que está no reducer

*/