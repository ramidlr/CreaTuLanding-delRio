import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout"; 

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greetings='Sneakerssss para vos...'/>}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer greetings='Descubri lo mejor para vos'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );

}

export default App;