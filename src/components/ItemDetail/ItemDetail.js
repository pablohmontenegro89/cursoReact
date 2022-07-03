import Card from 'react-bootstrap/Card'


function ItemDetail({product, price, imagen, detalle}){
    return(
    <Card style={{ width: '18rem' }} className="product">
        <Card.Img variant="top" src={`${imagen}`} />
        <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>
                Precio: ${price}
                </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{detalle}</Card.Footer>
    </Card>
    );
}

export default ItemDetail;