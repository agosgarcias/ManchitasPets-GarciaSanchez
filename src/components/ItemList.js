import React from 'react';
import Item from './Item';

export default function ItemList({producto, size, descripcion}){
    return (
        <div>
            <h1>{producto} {size}</h1>
            <Item {...descripcion}/>
        </div>
    )
}
