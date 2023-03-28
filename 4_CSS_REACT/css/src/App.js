import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com Css</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
    </div>
  );
}

export default App;
