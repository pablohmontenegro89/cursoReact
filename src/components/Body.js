import './Body.css'
import Card from './Card'
import React, { useState, useEffect } from 'react';


function Body(){
    
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('data.json')
        .then(resp => resp.json())
        .then(data=> setInfo(data))
    }, []);

    return(
        <>
        <h2>Listado de productos</h2>
        <section className="cuerpo">
            {info && info.map(i => <Card product={i.nombre} price={i.precio} />)}
        </section>
        </>
    );
}

export default Body;