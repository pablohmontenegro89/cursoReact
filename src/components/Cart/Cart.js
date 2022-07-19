import {useContext} from "react";
import {CartContext} from '../../contexts/CartContext'
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useContext(CartContext)
    
    const onDelete = () => {
        cart.clearCart()
    }

    const borrarItem = key => {
        cart.deleteElement(key)
      }
      
    if (cart.cart.length>0){  
    
    return ( 
        <>
        <h2>Carrito</h2>
        <ul>
         {cart.cart?.map(item =>(
                <li key={item.key}>
                <span>{item.item}-----</span>
                <span>Cantidad {item.quantity}-----</span>
                <span>Precio {item.price}</span>
                <button type="button" onClick={()=>borrarItem(item.key)}>Eliminar ítem</button>
                </li>
        ))}
        </ul>
        <button onClick={onDelete}>Vaciar carrito</button>
        <p>Total a pagar {cart.totalAPagar()}</p>
        </>
     );}
     else return(
        <>
        <h2>No hay items en el carrito</h2>
        <Link to={`/`}>
           <h1>Volver a landing</h1>
        </Link>
        </>  
     )
}

export default Cart;