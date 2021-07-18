import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList'
import '../components/style.css';

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
export default function ItemListContainer() {
    const [referens, setReferens] = useState([]);

    useEffect(() => {
        new Promise ((resolve, reject)=> {
        setTimeout(resolve(DataList), 2000)
    })
    .then((data) => {
        setReferens(data)
    })
    .catch((reject) =>
    console.log('Error en la toma de datos')
    )
}, [])

    return (
        <>
        <ItemList lista={referens}/>
        </>
 
        )
}


