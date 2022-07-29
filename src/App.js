import './App.css';
import './style.css'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import {CartProvider} from "./contexts/CartContext";
import ClientInfo from './components/ClientInfo/ClientInfo';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      {/* La Navbar afuera de Routes para que se muestre en todas las rutas */}
      <NavBar />

      {/* aca empiezan las rutas */}
      <Routes>
        {/* la HOME */}
        <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />

        {/* filtramos por categoria */}
        <Route
          path="/category/:catId"
          element={<ItemListContainer greeting={'FILTRADO'} />}
        />

        {/* vista de detalle */}
        <Route path="/product/:itemId" element={<ItemDetailContainer />} />

        {/* Acá se confirma la compra */}
        <Route path="/cart" element={<Cart />} />

        {/* Acá se termina la compra */}
        <Route path="/mandar" element={<ClientInfo />} />

        {/* para evitar navegar a rutas que no existen. pueden usar un mensaje de error en vez del navigate que reditecciona */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
