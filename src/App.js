import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import Modal from './components/Modal/modal';

function App() {
  return (
    <div className="App">

      <div>
        <NavBar />
  
        <ItemListContainer section="Productos en oferta" />
        <ItemListContainer section="Productos nuevos" />
        <ItemListContainer section="Productos más comprados" />
      </div>
      <Modal>
        <h2>Modal de registro</h2>
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </Modal>
    </div>
  );
}

export default App;