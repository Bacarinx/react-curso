import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/about'
import Product from './pages/Product'

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
          {/* 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
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


                    Rota Dinâmica
Para criar uma rota Dinâmica, vamos precisar definir uma nova Router em App.js

Ela deve ter o padrão de : "/products/:id"

onde :id é o dado dinâmico, ou seja, podemos ter qualque valor

Na página podemos utilizar o hook useParams para resgatar esta informação

                    Carregando Dado Individual
Graças ao passos dados da ultima aula, será facil de realizar o carregamento individual

Vamos utikizar o id recebido para FOrmar a nova URL

Vamos utilizar o hook useFetch para trazer o item

Por ultimo passo, faremos a validação e impressão do mesmo no JSX

                    Nested Route
As nested routes indicam URLs mais complexas como: "/products/:id/something"

Neste caso vamos precisar criar um componente que corresponda com o padrão indicado e também a URL em App.js

Na nested route teremos o acesso ao parâmetro da URL também





*/