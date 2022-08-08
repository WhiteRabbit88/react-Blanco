import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
    const cartContext = useContext(CartContext);
    const { productCart } = cartContext;

    return (
        <li><Link to="/cart"><i className="small material-icons">add_shopping_cart</i></Link></li>
    )
}

export default CartWidget;