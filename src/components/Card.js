import './Card.css';

function Card({product, price}){
    return(
        <section className="card">
            <p>{product}</p>
            <p>{price}</p>
        </section>
    );
}

export default Card;