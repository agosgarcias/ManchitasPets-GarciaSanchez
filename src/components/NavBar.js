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
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
        </div>
    )
    
}

export default NavBar