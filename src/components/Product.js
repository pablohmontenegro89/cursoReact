import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import './Product.css'


function Product({product, price, imagen, stock}){
    return(
    <Card style={{ width: '18rem' }} className="product">
        <Card.Img variant="top" src={`${imagen}`} />
        <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>
                Precio: ${price}
                </Card.Text>
                <Button variant="primary">Ver detalle</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Stock disponible: {stock}</Card.Footer>
    </Card>
    );
}

export default Product;