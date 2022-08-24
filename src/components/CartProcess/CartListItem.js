import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import './CartListItem.scss';
import Modal from '../Modal/modal';
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebaseConfig';
import { Rings } from  'react-loader-spinner'

const CartListItem = () => {
    const [ showModal, setShowModal ] = useState(false)
    const [ showSpinner, setShowSpinner ] = useState(false)
    const { cartProducts, clearAll, clearProduct, totalCart, totalPrice } = useContext(CartContext)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                name: product.name,
                cantidad: product.contador,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })

    const handleChange = (e) => {
        setFormData ({ ...formData, [e.target.name] : e.target.value })
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})  
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        
        setSuccess(orderDoc.id)
    }

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

                <div className="divider"></div>

                <div className="section row">
                    <div className="col s8">
                        <div className="card-action">
                            <button className='btn-noStyles' onClick={() => clearAll()}>Borrar todo</button>
                        </div>
                    </div>

                    <div className="col s4">
                        <h5 className='right-align'>Total final: <b>$ { totalCart }</b></h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col s10"></div>
                    <div className="col s2">
                    <button className='btn-small waves-effect waves-light' onClick={()=>setShowModal(true)}>Terminar compra</button>
                    </div>
                </div>
                </>
                : 
                <>
                    <div>No tienes productos en el carrito</div>
                    <Link to="/">Regresar a la tienda</Link>
                </>
            }

            {
                showModal &&
                <Modal close={() => setShowModal()}>
                    {!success ? 
                        <>
                        <h4>Datos de contacto</h4>
                        <form onSubmit={submitData}>
                            <input type="text" name="name" placeholder='Ingresa tu Nombre' required value={formData.name} onChange={handleChange} />
                            <input type="number" name="phone" placeholder='Ingresa tu Telefono' required value={formData.phone} onChange={handleChange} />
                            <input type="email" name="email" placeholder='Ingresa tu email' required value={formData.email} onChange={handleChange} />
                            
                            <div className='right-align'> 
                            { showSpinner && 
                            formData.name.length !== 0 &&
                            formData.phone.length !== 0 &&
                            formData.email.length !== 0 
                            
                            ?
                            <Rings color = '#34a69a' width = "50" height = "50" /> : "" } <button className='btn-small waves-effect waves-light' type='submit' onClick={()=>setShowSpinner(true)}>Continuar</button></div>
                            
                        </form>
                        </>
                        : 

                        <>
                        <div className="section row">
                            <div className="col s6">
                                <h5 className='green-text'>¡Tu orden se generó correctamente!</h5>
                                <p>Id de compra: <b>{success}</b></p>
                                <p className='small-text'>Un ejecutivo se comunicará contigo en un plazo de 24hs para proceder con el proceso de pago</p>
                            </div>

                            <div className="col s6">
                                <img src='/assets/carrito.gif' alt='Carrito completado' />
                            </div>
                        </div>
                        </>
                    }
                </Modal>
            }
            
        </div>
    )
}

export default CartListItem
