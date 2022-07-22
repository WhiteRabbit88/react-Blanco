
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import products from "../../utils/products.mock";

const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })

    useEffect(() => {
        getProducts
            .then((res) => { 
            setListProducts(res)
            })
            .catch((error) => { 
            console.log('Fallo');
            })
            .finally(() => { })
    }, [])

    return(
        <div className='listProduct'>
        <h4>{section}</h4>
            <div className="container">
                <ItemList dataProducts={listProducts} />
            </div>
        </div>
    )
}

export default ItemListContainer;