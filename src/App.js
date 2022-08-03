import 'materialize-css/dist/css/materialize.min.css'
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Footer from './components/Footer/footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Products from './pages/products';

function App() {

 

  return (
    <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryName' element={<Products/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>

        <Footer />

    </BrowserRouter>
  );
}

export default App;