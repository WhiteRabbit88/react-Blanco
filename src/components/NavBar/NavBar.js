import './NavBar.scss'

const NavBar = () => {
    return (
        <div>
            <nav className="deep-purple accent-3">
                <div className="container">
                <a href="index" className="brand-logo right">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="faqs.html">FAQS</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar