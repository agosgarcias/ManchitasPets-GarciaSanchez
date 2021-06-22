import React from 'react';
import "./style.css";

const DataList = [{
    id: 1,
    producto: "Cucha floreada/futbol",
    estampa: "si",
    size: "chico" ,
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "50x60cm"
    }},
    {
    id: 2,
    producto: "Cucha lisa",
    estampa: "si",
    size: "grande", 
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
    descripcion: {
        colchon: "loneta con base de fiselina", 
        forma: "rectangular", 
        relleno: "goma espuma de alta densidad", 
        tamaño: "60x70cm"
    }},

]
export default class ItemListContainer extends React.Component {

    state = { 
        referens: DataList,
    }
    render() {
        return (
        <div>{this.state.referens.map((item) => 
            <div className="Card">
            <h1>{item.producto}</h1>
            <p>{item.descripcion.colchon}, 
            {item.descripcion.forma}</p>
            </div>)
        }
        </div>
        )
    }
}