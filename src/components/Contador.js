import {useState} from "react";

function Contador() {
    const [num, setNum] = useState(0);

    const sumar = () => {
        setNum(num+1)
    }

    const restar = () => {
        setNum(num-1)
    }

    const reiniciar = () => {
        setNum(0)
    }
    return ( 
    <>
        <p>{num}</p>
        <button onClick={sumar}>Suma!</button>
        <button onClick={restar}>Resta!</button>
        <button onClick={reiniciar}>Reiniciar!</button>
    </>
     );
}

export default Contador;