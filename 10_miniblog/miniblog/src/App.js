import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from 'react';

//custom Hooks
import { useAuthentication } from './hooks/useAuthentication';

//pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//context
import { AuthProvider } from './context/AuthContext'; 
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined //estado de loading de usuário definido caso user seja undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route
               path="/" element={<Home />} 
              />
              <Route
               path="/about" element={<About/>} 
               />
              <Route
               path="/login" element={!user ? <Login /> : <Navigate to="/"/>} 
               />
              <Route
               path="/register" element={!user ? <Register /> : <Navigate to="/"/>} 
               />
              <Route
               path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/" />} 
               />
              <Route
               path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} 
               />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
