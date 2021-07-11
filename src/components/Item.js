import React from 'react'


function Item ({producto, size, descripcion}) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{producto}</h1>
                <p>{size}</p>
            </div>
        </div>
    )

}
export default Item