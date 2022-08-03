import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='header red darken-4'>
            <div className="container">
                <nav>
                    <Link to="/" className="brand-logo left"><img src='/assets/logo.png' alt='Logo' /></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category/Remeras">Remeras</Link></li>
                        <li><Link to="/category/Abrigo">Buzos</Link></li>
                        <li><Link to="/category/Pantalones">Pantalones</Link></li>
                        <li><Link to="/category/Accesorios">Accesorios</Link></li>
                        <li><Link to="contact">Contacto</Link></li>

                        <CartWidget />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar