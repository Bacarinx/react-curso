//import CSS
import './App.css';

import City from './assets/city.jpg';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="Cidade paisagem" />
      </div>
    </div>
  );
}

export default App;

/*resumo aula 1 - imagens na pasta public
1 - Para usar uma imagem da pasta public, basta utilizarmos a tag img, e no src colocar "/" e em seguida o nome da imagem Ex: /img1.jpg
*/

