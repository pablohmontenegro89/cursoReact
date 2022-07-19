import {useContext, useState} from "react";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext'

function Contador(product) {
    const {addToCart} = useContext(CartContext)
    const [num, setNum] = useState(0)
    const sumar = () => 
    num<product.stock 
    ? setNum(num+1) 
    : Swal.fire({
        title: 'Atención!',
        text: `No hay más stock, el stock de este producto es ${product.stock}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    const restar = () => num>0 && setNum(num-1)
    const onAdd = ()=> addToCart(product.name, num, product.id, product.price)
    return ( 
    <>
        <p>{product.stock > 1 ? `${product.stock} unidades disponibles` : `${product.stock} unidad disponible`}</p>
        <p>{num} items agregados al carrito</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <Link to="/cart">
            <button onClick={onAdd}>Agregar al carrito</button>
        </Link>
    </>
     );
}

export default Contador;