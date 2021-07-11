import React from 'react'

function ItemDetail ({nombre, material, medidas}) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{nombre}</h1>
                <p>`{material} - {medidas}`</p>
            </div>
        </div>
    )

}
export default ItemDetail