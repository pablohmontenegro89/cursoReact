import Contador from '../Contador';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}){
    return(
        <>
        <p>{greeting}</p>
        <Contador stock={5} initial={1} />
        <ItemList />
        <ItemDetailContainer/>
        </>
    );
}

export default ItemListContainer;