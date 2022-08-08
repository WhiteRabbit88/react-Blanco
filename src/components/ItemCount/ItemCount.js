import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';


const ItemCount = ({stock, quantitySelected, productData}) => {
    const { addProductToCart } = useContext(CartContext)
    const [ contador, setContador ] = useState(0);

    const onAdd=(contador) => {
        quantitySelected(contador);
        addProductToCart(productData, contador)
    }

    const more = () => {
        if( contador < stock ) {
            setContador(contador + 1);
        } 
    }

    const onLess = () => {
        if( contador > 0 ) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <div className='countProd'>
                <button className="btn waves-effect waves-light" onClick={onLess} disabled={contador === 0}>-</button>
                <p>{ contador }</p>
                <button className="btn waves-effect waves-light" onClick={more} disabled={stock === contador}>+</button>
            </div>

            <div className="card-action">
                <button className="btn waves-effect waves-light" onClick={() => onAdd(contador)} disabled={stock === 0}>Comprar</button>
            </div>

            <div className='card-stock'>Stock disponible: <b>{stock}</b></div>
        </div>
    )
}

export default ItemCount;