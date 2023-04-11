//links com React Router
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </div>
  )
}

export default Navbar