import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import Footer from './components/Footer/footer';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Item from './components/Item/Item';

function App() {

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => {
  //   return response.json()
  // })
  // .then((res) => {
  //   console.log("Listado de productos: ", res);
  // })

  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>

        <Footer />

    </BrowserRouter>
  );
}

export default App;