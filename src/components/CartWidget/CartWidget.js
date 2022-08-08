import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const { cartProducts } = cartContext;

    return (
        <li className='icon-nav'><Link to="/cart"><div className="qty-display">{cartProducts.length}</div> <i className="small material-icons"> add_shopping_cart</i></Link></li>
    )
}

export default CartWidget;