import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'*'} element={<Error404/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
