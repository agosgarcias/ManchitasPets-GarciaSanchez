import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

const referensData = [{
    id: 1,
    producto: "Cucha floreada/futbol",
    estampa: "si",
    size: "chico" ,
    stock: 30,
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        medidas: "50x60cm"
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
        medidas: "60x70cm"
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
        medidas: "50x60cm"
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
        medidas: "60x70cm",
    },
    },
]
function ItemList(){
    const referens = referensData

    return (
        <div>
            {referens.map((item) =>
                <div>
                <Item {...item}/>
                <ItemCount stock={item.stock}/>
                </div>)}

        </div>
    )
}
export default ItemList