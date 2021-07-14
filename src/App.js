import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext } from './components/cartContext';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Cart from './pages/Cart'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import Nosotros from './pages/Nosotros'
import Productos from './pages/Productos'

function App() {
  const[theme, setTheme] = useState({saludo: 'hola'})

  return (
    <>
    <Router>
    <NavBar/>
      <CartContext.Provider>
      <div className="App">
        <Switch>
          <Route path="/">
            <ItemListContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
        </Switch>
        <main className="App-main">
          <ItemDetailContainer />
        </main>
      </div>
      </CartContext.Provider>
    </Router>
    </>
  );
}

export default App;
