import { Link } from "react-router-dom"


const Home = () => {
    return(
        <div className='container'>
            <section className='main-container'>
                <ul>
                    <li><Link to="/category/Remeras">Remeras</Link></li>
                    <li><Link to="/category/Abrigo">Buzos</Link></li>
                    <li><Link to="/category/Pantalones">Pantalones</Link></li>
                    <li><Link to="/category/Accesorios">Accesorios</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Home