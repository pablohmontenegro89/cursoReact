import React from'react';
import Contador from '../Contador/Contador';

export const ItemDetail = (product) => {
    return (
      <div className="detail-row">
        <img src={product.image} alt={`${product.id}-${product.name}`} className="flex-col" />
        <section className="flex-col">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        <Contador {...product}/>       
        </section>       
      </div>
    );
  };