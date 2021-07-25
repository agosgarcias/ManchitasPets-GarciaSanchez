import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Item ({producto, size, descripcion, stock, id}) {
    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/item/${id}`}><h1 className="card-title" key={id}>{producto}</h1></Link>
                <p>tamaño: {size} - colchon: {descripcion.colchon}</p>
            </div>
        </div>
    )

}
export default Item