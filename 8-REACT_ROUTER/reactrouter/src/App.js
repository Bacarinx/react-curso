import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/about'

//components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar />
      {/* 2 - links com React Router*/}
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
                    Configurando o react router 

Primeiro passo é fazer a instalação dele na pasta do projeto (npm i react-router-dom)

BrowserRouter: Define onde a área do nosso app que vai trocar as páginas

Routes: Define as rotas

Route: Um delemento deste para cada rota, configurar com path e componente da rota


                    Adicionando os links
  
Para criar links entre as páginas precisamos utiliozar o LINK do react Router

No link configuramos o parâmetro "to", que recebe a URL/path que será redirecionadp quem clicar no link


                    Carregando Dados
                    
Exercitando novamente o carregamento de dados com o hook useFetch    

Depois poderemos utilizá-los para o "carregamento de dados individuais"

*/