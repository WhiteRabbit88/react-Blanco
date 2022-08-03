import './Item.scss'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const Item = ({ data }) => {


    const {name, thumbnail, price, stock, id } = data

    
    const onAdd=(contador) => {
        alert("Agregaste: " +contador+" items a tu carrito");
    }

    return(
        <div className='productCard'>
            <div className="card">
                <div className="card-image">
                    <img src={`/assets/${thumbnail}`} alt="Producto 1" />
                    <span className="card-title">$ { price }</span>
                </div>
                <div className="card-content">
                    <h5>{ name }</h5>
                
                    <Link to={`/products/${id}`}><span>Ver detalles del producto</span></Link>

                    <ItemCount stock={stock} initial={1} onAdd={onAdd}>
                    </ItemCount>
                </div>
            </div>
        </div> 
    )
}

export default Item;