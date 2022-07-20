import './ItemProduct.scss'
import ItemCount from "../ItemCount/ItemCount";

const ItemProduct = ({data}) => {
    const { title, image, price, stock } = data

    //1. Mount -> Crea -> [] array vacio
    //2. Update/Change/Actualizacion -> Cambio el valor State/prop   
    //3. unMount/Desmontaje -> Destruye, desaparece -> return

    return(
        <div className='productCard'>
            <div className="card">
                <div className="card-image">
                    <img src={`/assets/${image}`} alt="Producto 1" />
                    <span className="card-title">{ title }</span>
                </div>
                <div className="card-content">
                    <h3>$ { price }</h3>
                
                    <ItemCount stock={stock}>
                    </ItemCount>
                </div>
            </div>
        </div>  
    )
}

export default ItemProduct;