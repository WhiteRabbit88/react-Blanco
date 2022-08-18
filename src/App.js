import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Footer from './components/Footer/footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import CartProvider from './context/CartContext';
import CartPage from './pages/cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>

          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;