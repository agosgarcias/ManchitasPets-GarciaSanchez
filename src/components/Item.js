import React from 'react'


export default function Item (producto, size, colchon, forma, medidas) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{producto}</h1>
                <p>{colchon} {size} {forma} {medidas}</p>
            </div>
        </div>
    )

}