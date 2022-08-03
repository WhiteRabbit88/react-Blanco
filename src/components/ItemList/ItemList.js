import Item from "../Item/Item"

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( product =>
                <Item
                      data={product}
                      key ={product.id}
                />
        )}
        </>
    )
}

export default ItemList

