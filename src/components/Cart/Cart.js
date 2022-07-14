import {useContext, useState} from "react";
import {CartContext} from '../../contexts/CartContext'

function Cart() {
    const cart = useContext(CartContext)
    const onDelete = ()=> cart.cleartCart()
    return ( 
        <>
        <h2>Carrito</h2>
        {cart.cart?.map(item =>(
            <div>
            <p>{item.item}</p>
            <p>{item.quantity}</p>
            </div>
        ))}
        <button onClick={onDelete}>Vaciar carrito</button>
        </>
     );
}

export default Cart;