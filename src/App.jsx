import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greetings='Sneakerssss para vos...'/>}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer greetings='Lo mejor para vos:'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;