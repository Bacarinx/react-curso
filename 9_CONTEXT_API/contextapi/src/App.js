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

*/