import Item from "../Item/Item"

const ItemList = ({data}) => {
    return(
        <>
            {data.map( product =>
                <Item
                      data={product}
                      key ={product.id}
                />
        )}
        </>
    )
}

export default ItemList

