import React from'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ id, name, category, image, price, discount }) => {
    /* aca tenemos nuestro Link */
    return (
      <>
          <Card style={{ width: '18rem' }}>
          <Card.Img className={'small-img'} src={image}/>
          <Card.Body>
            <Card.Title>Cat: {category}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><Link to={`/product/${id}`}>Ver más detalle</Link></Button>
          </Card.Body>
        </Card>
      </>
    );
  };
  