import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
  return (
    <div className="App">
        <NavBar/>
      <main className="App-main">
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
