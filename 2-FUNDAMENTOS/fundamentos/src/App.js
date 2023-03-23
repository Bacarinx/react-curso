//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

//styles /CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
};

export default App;

//Resumo aula 1 - EXPORTAÇÃO

// 1 - Criamos uma pasta components dentro do src para colocar todos os documentos nela

// 2 - criamos uma função que será exportada para outro arquivo, iniciado por uma arrow function

//----------------------------------------------------------//

//Resumo aula 2 - IMPORTAÇÂO

// 1 - Para importar um arquivo utilizamos a sintaxe: import [nome Arquivo] from [lugar de exportação]

// 2 - para usar o arquivo importado utilizamos asintaxe: <NomeCOmponente />

//----------------------------------------------------------//

//Resumo aula 3 - JSX

// 1 - Algumas tags vão ser alteradas de nome para não interferir no proprio html ou javascript, logo a tag "Name" ira ser chamada de "className"

// 2 - O JSX pode ter apenas UM ELEMENTO PAI, logo todo a função será envelopada por apenas uma div

//----------------------------------------------------------//

//resumo aula 4 - COMENTÁRIOS NO JSX

// 1 - Para realizar um comentário dentro da função no JSX, utilizamos a seguinte sintaxe: { /* texto */ }

//----------------------------------------------------------//

//resumo aula 5 - Template Expressions 

// 1 - Todo conjunto de chaves "{}", consegue interpolar um conjunto de código em javascript, logo, podemos inserir dentro de um paragrafo, o valor de uma variavel, objeto, vetor, cálculo matematico, etc

//----------------------------------------------------------//

//resumo aula 6 - Hierarquia de componentes

// 1 - Podemos acrescentar componentes dentro de componentes, além disso podemos inserí-los junto a esses proprios componentes no arquivo pai, que é o "app.js"

//----------------------------------------------------------//

//resumo aula 7 - Eventos 

// 1 - Na hora de criar um evento, antes de iniciar o JSX, utilizamos uma arrow function para descrever todo o código do evento;

// 2 - Para nomear um evento, em geral utilizamos handleAlgumaCOisa, Ex: handleMeuEvento;

// 2 - Para colocar o evento dentro do código, usamos o próprio arquivo de criação do evento, o por meio das tags chamamos eles dentro de chaves;

// exemplo: <button onCLick = {Nome do evento}> </button>;

// 3 - A função de click tem um nome proprio, "onCLick";
