//Components
import FirstComponent from './components/FirstComponent';

//styles /CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </div>
  );
};

export default App;

//Resumo aula 2 :

//Para importar um arquivo utilizamos a sintaxe: import [nome Arquivo] from [lugar de exportação]

//para usar o arquivo importado utilizamos asintaxe: <NomeCOmponente />