import { useState } from 'react'


const ItemCount = ({stock}) => {
    const [ contador, setContador ] = useState(1);

    const onAdd = () => {
        if( contador < stock ) {
            setContador(contador + 1);
        } else {
            alert("No es posible comprar más que el stock disponible");
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
                <button className="btn waves-effect waves-light" onClick={onLess}>-</button>
                <p>{ contador }</p>
                <button className="btn waves-effect waves-light" onClick={onAdd}>+</button>
            </div>

            <div className='card-stock'>Stock disponible: <b>{stock}</b></div>

            <div className="card-action">
                <button className="btn waves-effect waves-light">Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount;