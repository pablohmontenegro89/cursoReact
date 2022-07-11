import { useState } from "react";

function Cart({stock, initial}) {

    const [cant, setCant] = useState(initial);

    return ( 
        <h2>Carrito</h2>
     );
}

export default Cart;