import { promises } from 'fs';
import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const productoData = {
    id: 1,
    nombre: 'Colchon Beagle',
    material: 'friselina',
    medidas: '40x50cm',
}

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        new Promise ((resolve, reject) =>{
            setTimeout(()=> resolve(productoData), 2000)
        }).then((res) => setProducto(res))
    },[])
    
    return(
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer