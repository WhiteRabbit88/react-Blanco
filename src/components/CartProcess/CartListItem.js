import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import './CartListItem.scss';

const CartListItem = () => {
    const { cartProducts, clearAll, clearProduct } = useContext(CartContext)

    return (
        <div>
        { cartProducts.length > 0 && 
            cartProducts.map((product) => {
                return(
                    <div className="row">
                        <div className="col s9" key={product.id}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={`/assets/${product.thumbnail}`} alt="" />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-block">
                                        <h5>{product.name}</h5>
                                        <h6>$ {product.price}</h6>
                                        <span className="cart-item"><strong>Cantidad:</strong> {product.contador}</span>

                                    </div>

                                    <div className="cart-product__action">
                                    <button className='btn waves-effect waves-light' onClick={()=>clearProduct(product.id)}>Eliminar producto</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col s3">
                            Total:
                        </div>
                    </div>
                )
            })
        }
            <button className='btn waves-effect waves-light' onClick={() => clearAll()}>Borrar todo</button>
        
        </div>
    )
}

export default CartListItem
