import {useState} from "react";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

function Contador(product) {
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
    const onAdd = () => product.onSaveCarrito(true)
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