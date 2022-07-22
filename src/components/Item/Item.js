import './Item.scss'
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ name, thumbnail, price, stock }) => {

    //1. Mount -> Crea -> [] array vacio
    //2. Update/Change/Actualizacion -> Cambio el valor State/prop   
    //3. unMount/Desmontaje -> Destruye, desaparece -> return

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
                
                    <a>Ver detalles del producto</a>

                    <ItemCount stock={stock} initial={1} onAdd={onAdd}>
                    </ItemCount>
                </div>
            </div>
        </div>  
    )
}

export default Item;