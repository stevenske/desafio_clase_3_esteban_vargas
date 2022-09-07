import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Counter from './components/counter/Counter';
function App() {
// los tastes seria el "stock"

  const tastes = 4
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='bienvenido a helados a tu gusto!! '/>
      <Counter tastes = {tastes}/>
    </div>
  );
}

export default App;
