import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({section}) => {
    const [ data, setData ] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')

        if(categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))

            getDocs(queryFilter)
            .then(
                res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data() })))
            )
        } else {
            getDocs(queryCollection)
            .then(
                res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data() }))))
        }
    }, [categoryId])

    return(
        <div className='container'>
            <h4>Listado de productos</h4>
            
            <section className='main-container listProduct'>
                <ItemList data={data}></ItemList>
            </section>
        </div>
    )
}

export default ItemListContainer;