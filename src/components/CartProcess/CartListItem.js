import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import './CartListItem.scss';

const CartListItem = () => {
    const { cartProducts, clearAll, clearProduct, totalCart } = useContext(CartContext)

    console.log(totalCart)

    return (
        <div>
            { cartProducts.length > 0 ? 
                <><p className='card-stock'>Tienes <b>{ cartProducts.length }</b> productos diferentes en tu carro de compras. </p>

                { cartProducts.map((product) => {
                    let TotalPrice =+ product.price * product.contador;

                    return(
                        <div className="row">
                            <div className="col s12 padding-0" key={product.id}>
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img src={`/assets/${product.thumbnail}`} alt="" />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-block">
                                            <h5>{product.name}</h5>
                                            <p className="cart-item">Precio unit.: <b>$ {product.price}</b></p>

                                            <p>Cantidad seleccionada: <b>{ product.contador }</b></p>

                                        </div>

                                        <div className="cart-product__action">
                                        <button className='btn-small waves-effect waves-light' onClick={()=>clearProduct(product.id)}>Eliminar producto</button>
                                        </div>
                                    </div>

                                    <div className="price">
                                        <span className="grey-text text-darken-4">Total:</span>
                                        <h4>$ { TotalPrice }</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }) }

                <div className="row">
                    <div className="col s10">
                        <div className="card-action">
                            <button className='btn waves-effect waves-light' onClick={() => clearAll()}>Borrar todo</button>
                        </div>
                    </div>

                    <div className="col s2">
                        Total final: <b>$ { totalCart }</b>
                    </div>
                </div>
                </>
                : 
                <>
                    <div>No tienes productos en el carrito</div>
                    <Link to="/">Regresar a la tienda</Link>
                </>
            }
        </div>
    )
}

export default CartListItem
