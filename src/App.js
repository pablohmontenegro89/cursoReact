import './App.css';
import Navbar from './components/Navbar'

import Contenedor from './components/Contenedor';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer greeting="Catálogo"/>       
        <Contenedor />
    </div>   
  );
}

export default App;