import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = ({section}) => {
    return(
        <div className='listProduct'>
        <h4>{section}</h4>
            <div className="container">
                <ItemProduct title='Campera de invierno' price={2000} image="foto1.webp" />
                <ItemProduct title='Remera' price={4000} image="foto2.webp" />
                <ItemProduct title='Buzo' price={5000} image="foto3.webp" />
            </div>
        </div>
    )
}

export default ItemListContainer;