import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const { cartProducts, totalProducts } = cartContext;
    
    return (
        <li className='icon-nav'>
        
            <Link to="/cart">
                { 
                    cartProducts.length > 0 
                ? 
                <div className="qty-display">{ totalProducts }</div> 
                : ""
                }
                
                <i className="small material-icons"> add_shopping_cart</i>
            </Link>
        </li>
    )
}

export default CartWidget;