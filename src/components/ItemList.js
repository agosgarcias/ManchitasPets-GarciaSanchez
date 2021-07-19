import React from 'react';
import Item from './Item';

function ItemList({lista}){

    return (
        <div>
            {lista.map((item) =>
                <div>
                <Item {...item}/>
                </div>)}

        </div>
    )
}
export default ItemList
