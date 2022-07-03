import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemList(){
    
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
        <h2>Detalle de un producto, desafío clase 7</h2>
        <Row xs={1} md={2} className="g-4 itemlist">
            {info && info.map(i => (i.nombre=="Alcohol" && <ItemDetail product={i.nombre} price={i.precio} imagen={i.imagen} detalle={i.detalle} />))}
        </Row>
        </>
    );
}

export default ItemList;