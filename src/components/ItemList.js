import './ItemList.css'
import Product from './Product'
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';


function Body(){
    
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch('data.json')
        .then(resp => resp.json())
        .then(data=> {setTimeout(function(){
            setInfo(data)
        }, 2000);})
    }, []);

    return(
        <>
        <h2>Listado de productos</h2>
        <Row xs={1} md={2} className="g-4 itemlist">
            {info && info.map(i => <Product product={i.nombre} price={i.precio} imagen={i.imagen} stock={i.stock} />)}
        </Row>
        </>
    );
}

export default Body;