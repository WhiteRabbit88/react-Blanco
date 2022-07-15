import './ItemProduct.scss'

const ItemProduct = ({title, price, image}) => {
    
    return(
        <div className='productCard'>
            <div class="card">
                <div class="card-image">
                    <img src={`/assets/${image}`} alt="Producto 1" />
                    <span class="card-title">{ title }</span>
                </div>
                <div class="card-content">
                    <span>$ { price }</span>
                </div>
                <div class="card-action">
                    <button class="btn waves-effect waves-light">Comprar</button>
                </div>
            </div>

        </div>  
    )
}

export default ItemProduct;