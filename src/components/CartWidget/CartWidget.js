import './CartWidget.scss'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <li><Link to="#"><i className="small material-icons">add_shopping_cart</i></Link></li>
    )
}

export default CartWidget;