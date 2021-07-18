import React from 'react'
import CartWidget from './CartWidget'
import IconCarrito from './IconCarrito'
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div style={{width: '100%', heigth: '20%'}} className="Titulo">
            <Link to="/"><CartWidget /></Link>
            <h1>¡BIENVENIDOS!</h1>
            <h2>Somos Manchitas Pets!</h2>
            <IconCarrito />
        <nav className="Nav">
            <ul className="Menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cuchas">Cuchas</Link></li>
                <li><Link to="/camas">Camas</Link></li>
            </ul>
        </nav>
        </div>
    )
    
}

export default NavBar