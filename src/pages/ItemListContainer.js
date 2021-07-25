import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from '../components/ItemList'
import '../components/style.css';

const DataList = [{
    id: 1,
    categoria: "estampados",
    producto: "Colchon estampado",
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
    categoria: "estampados",
    producto: "Colchon estampado",
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
    categoria: "lisos",
    producto: "Cucha lisa",
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
    categoria: "lisos",
    producto: "Cucha lisa",
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
const promiseFunction = () => {
    return(
         new Promise ((resolve, reject)=> {
        setTimeout(resolve(DataList), 2000)
    }))
}
export default function ItemListContainer() {
    const [referens, setReferens] = useState([]);
    const {categoriaID} = useParams();

    useEffect(() => {
        promiseFunction().then((data) => {
            const filtroCategoria = data.filter(element => element.categoria === categoriaID);
            categoriaID ? setReferens(filtroCategoria) : setReferens(data);
    })
}, [categoriaID])

    return (
        <>
        <ItemList lista={referens}/>
        </>
 
        )
}


