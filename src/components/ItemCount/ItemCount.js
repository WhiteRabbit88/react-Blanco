import { useState } from 'react'


const ItemCount = ({stock, quantitySelected}) => {
    const [ contador, setContador ] = useState(1);

    const onAdd=(contador) => {
        quantitySelected(contador);
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
                <button className="btn waves-effect waves-light" onClick={onLess} disabled={contador === 1}>-</button>
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