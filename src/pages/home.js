import { Link } from "react-router-dom"
import products from "../utils/products.mock";

const Home = () => {
    return(
        <div className='container'>
            <section className='main-container'>
                <ul>
                    <li><Link to="/category/Remeras">Remeras</Link></li>
                    <li><Link to={`/category/${products.category}`}>Buzos</Link></li>
                    <li><Link to={`/category/${products.category}`}>Pantalones</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default Home