import React, { useState } from 'react';
import ItemCount from './ItemCount';
import "./style.css";

const DataList = [{
    id: 1,
    producto: "Cucha floreada/futbol",
    estampa: "si",
    size: "chico" ,
    stock: 30,
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "50x60cm"
    }
    },
    {
    id: 2,
    producto: "Cucha lisa",
    estampa: "si",
    size: "grande",
    stock: 40, 
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "60x70cm"
    }},
        {
    id: 3,
    producto: "Cucha floreada/futbol",
    estampa: "no",
    size: "chico",
    stock: 20, 
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "50x60cm"
    }},
    {
    id: 4,
    producto: "Cucha lisa",
    estampa: "no",
    size: "grande",
    stock: 25,
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "60x70cm",
    },
    },
]
export default function ItemListContainer() {
    const [referens, setReferens] = useState(DataList);

    return (
        <div>{referens.map((item) => 
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{item.producto}</h1>
                    <p>{item.descripcion.colchon} {item.descripcion.forma} {item.descripcion.tamaño} </p>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>)
            }
        </div>
        )
}

/*Falta utilizar el setReferens para cuando querramos agregarlo al carrito*/
/*Intente usar el spread operator para el item <p> de la descripcion pero no me lo tomaba*/