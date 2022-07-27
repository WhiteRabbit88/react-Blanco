import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import products from "../../utils/products.mock";

const ItemDetailContainer = ({section}) => {

    const [listItem, setListItem] = useState([])

    const getItem = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })

    useEffect(() => {
        getItem
            .then((res) => { 
                setListItem(res)
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
                <ItemList dataProducts={listItem} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;