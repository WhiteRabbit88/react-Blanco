import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className='header'>
            <nav className="red darken-4">
                <div className="container">
                    <a href="index" className="brand-logo right"><img src='/assets/logo.png' alt='Logo' /></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="faqs.html">FAQS</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>

                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar