import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const carros = [
    {id: 1,  modelo: "RENAULT", ano: 2009, km: 200000, newCar: false},
    {id: 2,  modelo: "FORD", ano: 2018, km: 180000, newCar: false},
    {id: 3,  modelo: "CHEVROLET", ano: 2022, km: 0, newCar: true}
  ]

  return (
    <div className="App">
      <h1>Detalhes de carros</h1>
      {carros.map(carro => (
        <CarDetails 
        key = {carro.key}
        modelo = {carro.modelo}
        ano = {carro.ano}
        km = {carro.km}
        />

      ))}
    </div>
  );
}

export default App;
