import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import Modal from './components/Modal/modal';
import ItemDetailContainer from './components/ItemDetail/ItemDetail';

function App() {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((res) => {
    console.log("Listado de usuarios: ", res);
  })

  return (
    <div className="App">
      <div>
        <NavBar />
  
        {/* <ItemListContainer section="Productos en oferta" />
        <ItemListContainer section="Productos nuevos" />
        <ItemListContainer section="Productos más comprados" /> */}

        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;