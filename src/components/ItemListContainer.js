import Contador from './Contador';
import ItemList from './ItemList';

function ItemListContainer({greeting}){
    return(
        <>
        <p>{greeting}</p>
        <Contador stock={5} initial={1} />
        <ItemList />
        </>
    );
}

export default ItemListContainer;