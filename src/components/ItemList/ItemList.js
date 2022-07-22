import Item from "../Item/Item"

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( product =>
                <Item
                      name={product.name}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                />
        )}
        </>
    )
}

export default ItemList

