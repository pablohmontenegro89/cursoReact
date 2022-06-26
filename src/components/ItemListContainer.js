import Contador from './Contador';

function ItemListContainer({greeting}){
    return(
        <>
        <p>{greeting}</p>
        <Contador stock={5} initial={1} />
        </>
    );
}

export default ItemListContainer;