import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer';
import { CartContext } from './components/cartContext';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Cart from './pages/Cart'

function App() {
  const[theme, setTheme] = useState({saludo: 'hola'})

  return (
    <>
    <Router>
      <CartContext.Provider>
      <div className="App">
          <NavBar/>
        <main className="App-main">
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        </main>
      </div>
      </CartContext.Provider>
    </Router>
    </>
  );
}

export default App;
