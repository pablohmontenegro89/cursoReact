import './App.css';
import Navbar from './components/Navbar'
import Body from './components/Body';
import Contenedor from './components/Contenedor';
import Contador from './components/Contador';
import Cart from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting="Catálogo"/>
        <Body />
        <Contenedor />
        <Contador />
    </div>   
  );
}

export default App;