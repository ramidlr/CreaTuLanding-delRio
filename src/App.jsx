import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <CartProvider>
      <Routes>
        <Route path='/' element={ <ItemListContainer greetings='Sneakerssss para vos...'/>}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer greetings='Lo mejor para vos:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  );

}

export default App;