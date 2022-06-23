import {useState} from "react";
import Hello from "./Hello";

function Contenedor() {
    const [name, setName] = useState('React')
    return ( 
        <>
        <Hello name={name}/>
        <button onClick={()=> setName("Mundo")}>Click me</button>
        </>
     );
}

export default Contenedor;