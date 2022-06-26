import {useState} from "react";
import Swal from 'sweetalert2'

function Contador({stock, initial}) {
    const [num, setNum] = useState(initial);
    const sumar = () => 
    num<stock 
    ? setNum(num+1) 
    : Swal.fire({
        title: 'Atención!',
        text: `No hay más stock, el stock de este producto es ${stock}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    const restar = () => num>0 && setNum(num-1)
    const reiniciar = () => setNum(0)
    return ( 
    <>
        <h2>Desafío contador</h2>
        <p>{stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
        <p>{num}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar!</button>
    </>
     );
}

export default Contador;