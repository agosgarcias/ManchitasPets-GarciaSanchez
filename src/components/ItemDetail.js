import React from 'react'

function ItemDetail ({nombre, material, medidas, url, id}) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{nombre}</h1>
                <p>Material: {material} -
                   Medidas: {medidas}</p>
                <img src={url} alt="beagle" className="FotoProducto" id={id} ></img>
            </div>
        </div>
    )

}
export default ItemDetail