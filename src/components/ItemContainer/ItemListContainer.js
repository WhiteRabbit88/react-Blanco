import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = ({section}) => {
    const product1 = {
        title: "Remera",
        price: 1500,
        image: "foto3.webp", 
        stock: 5
    }

    const product2 = {
        title: "Campera",
        price: 2000,
        image: "foto3.webp",
        stock: 1
    }

    const product3 = {
        title: "Pantalon",
        price: 3000,
        image: "foto3.webp",
        stock: 15
    }

    return(
        <div className='listProduct'>
        <h4>{section}</h4>
            <div className="container">
                <ItemProduct data={product1} />
                <ItemProduct data={product2} />
                <ItemProduct data={product3} />
            </div>
        </div>
    )
}

export default ItemListContainer;