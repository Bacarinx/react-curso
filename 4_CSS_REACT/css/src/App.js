import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const redTitle = true

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com Css</h1>

      {/* Css de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}> Este título vai ter classe dinamica</h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;

/* 
    CSS Modules

1- NO css modules, cada arquivo css só vai ser carregado um um único componente react

2- para nomear o arquivo css colocamos: NomeCOmponente.module.css

3- Inserirmos as classes e para atribuí-las aos componentes temos que utilizar {} e dentro dela escrever {styles.(classe do css)}

ex: <p className = {styles.my_tytle}> ... </p>
*/