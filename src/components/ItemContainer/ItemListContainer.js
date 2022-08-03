import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import products from "../../utils/products.mock";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({section}) => {
    const [listProducts, setListProducts] = useState([])
    const { categoryName } = useParams()

    const filterCategory = products.filter((products) => products.category === categoryName)
    
    const getProducts = () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (categoryName ===  "Pantalones" || categoryName ===  "Accesorios" || categoryName ===  "Remeras" || categoryName ===  "Abrigo") {
                resolve(filterCategory)
            }

            else {
                resolve(products)
            }
        }, 2000);
    })

    useEffect(() => {
        const getProduct = async () => {
            try{
                const responseLog = await getProducts()
                setListProducts(responseLog)

                
            }

            catch(error){ console.log(error) }
        }
        getProduct()
    }, )

    return(
        <div>
            <h4>{section}</h4>
            <div className='listProduct'>
                <ItemList dataProducts={listProducts}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer;