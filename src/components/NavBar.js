import React from 'react'
import CartWidget from './CartWidget'

function NavBar(){
    return (
        <div style={{width: '100%', heigth: '20%'}} className="Titulo">
            <CartWidget />
            <h1>¡BIENVENIDOS!</h1>
            <h2>Somos Manchitas Pets!</h2>
        <nav className="Nav">
            <ul className="Menu">
                <li>Productos</li>
                <li>Nosotros</li>
                <li>Galeria</li>
                <li>Contacto</li>
            </ul>
        </nav>
        </div>
    )
    
}

export default NavBar