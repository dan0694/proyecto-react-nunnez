import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Bill from './components/Bill';

function App() {
  return (
    <CartContextProvider>
      <div className="app">
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path={'/'} element={<ItemListContainer/>}/>
              <Route path={'/category/:id'} element={<ItemListContainer/>}/>
              <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
              <Route path={'/checkout'} element={<Checkout/>}/>
              <Route path={'/bill/:id'} element={<Bill/>}/>
              <Route path={'*'} element={<Error404/>}/>
            </Routes>
            
          </BrowserRouter>
        </div>
    </CartContextProvider>
  
  );
}

export default App;
