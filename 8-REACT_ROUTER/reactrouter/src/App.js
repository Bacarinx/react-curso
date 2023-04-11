import './App.css';

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/about'
import Product from './pages/Product'
import Info from "./pages/Info"
import NotFound from './pages/NotFound';
import Search from './pages/Search';

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - links com React Router*/}
      <Navbar />
      {/* 9 - search */}
      <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - Rota Dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - Nested Route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
                    Configurando o react router 
Primeiro passo é fazer a instalação dele na pasta do projeto (npm i react-router-dom)

Após isso, fazemos a importação dos 3 componentes:

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

Vamos utikizar o id recebido para Formar a nova URL

Vamos utilizar o hook useFetch para trazer o item

Por ultimo passo, faremos a validação e impressão do mesmo no JSX


                    Nested Route
As nested routes indicam URLs mais complexas como: "/products/:id/something"

Neste caso vamos precisar criar um componente que corresponda com o padrão indicado e também a URL em App.js

Na nested route teremos o acesso ao parâmetro da URL também

                    Página 404 
Basta criarmos o componente da página

No arquivo App.js definir um path como *

Desta meneira, qualquer rota que não exista cairá neste componente

                    Link Ativo
Para ter fácil acesso a uma modificação para os links tivos vamos trocar o Link pelo NavLink

Neste elemento temos acesso a um valor chamado isActive

Ou seja, podemos ativar uma classe se a rota attual for a que está no atributo to


                    Search Params
É um recurso que permite obter o valor que vem na URL em forma de parametro, ex: produtos?q=camisa

Utilizaremos o hook useSearchParams para obtê-los

Com este recurso fica simpoes fazer uma funcionalidade de busca no sistema

                    Redirect
Podemos precisar de um redirecionamento de páginas eventualmente

exemplo: Uma página antiga no sitema responde agora a uma nova URL

Para isso vamos criar a rota com Route normalmente

Mas em element vamos utilizar o component Navigate com um TO que vai para a rota correta
*/