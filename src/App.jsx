import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda, agregue los items que quiera al carrito para proceder con su compra"/>
    </div>
  );
}

export default App;
