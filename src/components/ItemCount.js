import React, {useState} from 'react'

function ItemCount ({stock, onAdd, initial}) {
    var initial = 1
    const [count, setCount] = useState(initial)

    const addCount = () => {
    if(stock > 1 && count < stock){
        setCount(count + 1)
        }
    }

    const lessCount = () => {
    if(count > 0) {
        setCount(count - 1)
    }
    else if (count <= 0) {
        setCount(count + 0)
        }
    }

    return (
        <div>
            <button onClick={onAdd}>Agregar al carrito</button>
            <br/>
            <button onClick={addCount}>+</button>
            <h3>{count}</h3>
            <button onClick={lessCount}>-</button>
        </div>
    )   

}

export default ItemCount;