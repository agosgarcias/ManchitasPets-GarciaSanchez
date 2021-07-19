import React from 'react';
import carrito from '../carrito.png'
import "./style.css"


export default function CartWidget(){
    return (
        <img src={carrito} alt="cartWidget" className="cartWidget" />
    )
} 