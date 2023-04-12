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
