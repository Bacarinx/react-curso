//links com React Router
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link>
        </nav>
    </div>
  )
}

export default Navbar