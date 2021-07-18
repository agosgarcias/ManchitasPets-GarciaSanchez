import React from 'react';
import Item from './Item';
import ItemCount from './ItemCount';

function ItemList({lista}){

    return (
        <div>
            {lista.map((item) =>
                <div>
                <Item {...item}/>
                <ItemCount stock={item.stock}/>
                </div>)}

        </div>
    )
}
export default ItemList
