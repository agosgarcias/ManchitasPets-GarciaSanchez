import React, { useState } from 'react'
import reactDom from 'react-dom'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

function ItemDetail ({nombre, material, medidas, url, id, precio, stock}) {
    const [cantidades, setCantidades] = useState ()

    const onAdd = (quantityToAdd) => {
        quantityToAdd ? setCantidades(quantityToAdd) : setCantidades()
        console.log(quantityToAdd)
    }


    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{nombre}</h1>
                <p>Material: {material} -
                   Medidas: {medidas}</p>
                <img src={url} alt="beagle" className="FotoProducto" id={id} ></img>
                <span>$ {precio}</span>
                {cantidades === undefined ? 
                <ItemCount stock={stock} className="ButtonCount" onAdd={onAdd}/> : 
                <Link to={"/cart"}><button>Terminar compra</button></Link>}
            
            </div>
        </div>
    )

}
export default ItemDetail