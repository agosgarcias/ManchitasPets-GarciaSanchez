import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer';
import { CartContext } from './components/cartContext';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const[theme, setTheme] = useState({saludo: 'hola'})

  return (
    <>
      <div className="App">
    <Router>
      <CartContext.Provider>
          <NavBar/>
        <main className="App-main">
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:categoriaID">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:itemID">
            <ItemDetailContainer />
          </Route>
        </Switch>
        </main>
      </CartContext.Provider>
    </Router>
      </div>
    </>
  );
}

export default App;
