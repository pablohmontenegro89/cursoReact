import React from'react';
import Contador from '../Contador/Contador';
import { useState } from 'react';

export const ItemDetail = (product) => {
  const [enCarrito,setEnCarrito] = useState(false)
  const onSaveCarritoHandler = (save)=>{
     setEnCarrito(save)
  }
    return (
      <div className="detail-row">
        <img src={product.image} alt={`${product.id}-${product.name}`} className="flex-col" />
        <section className="flex-col">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        {!enCarrito && <Contador {...product} onSaveCarrito={onSaveCarritoHandler}/>}          
        </section>       
      </div>
    );
  };