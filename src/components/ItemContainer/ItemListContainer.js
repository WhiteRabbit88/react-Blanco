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
            if (categoryName) {
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
        <div className='container'>
            <h4>Listado de productos</h4>
            
            <section className='main-container listProduct'>
                <ItemList dataProducts={listProducts}></ItemList>
            </section>
        </div>
    )
}

export default ItemListContainer;