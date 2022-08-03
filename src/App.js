import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Footer from './components/Footer/footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './pages/products';
import Checkout from './pages/checkout';
import ItemListContainer from './components/ItemContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products' element={<ItemListContainer/>} />
          <Route path='/category/:categoryName' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>

        <Footer />

    </BrowserRouter>
  );
}

export default App;