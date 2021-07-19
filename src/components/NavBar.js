import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const estampados = "estampados"
const lisos = "lisos"

function NavBar(){
    return (
        <>
        <div style={{width: '100%', heigth: '20%'}} className="Encabezado">
            <Link to="/"><Logo /></Link>
            <div className="Titulo">
                <h1>¡BIENVENIDOS!</h1>
                <h2>Somos Manchitas Pets!</h2>
            </div>
            <CartWidget />
            </div>
        <nav className="Nav">
            <ul className="Menu">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={`/categoria/${estampados}`}>Estampados</Link></li>
                <li><Link to={`/categoria/${lisos}`}>Lisos</Link></li>
            </ul>
        </nav>
        </>
    )
    
}

export default NavBar