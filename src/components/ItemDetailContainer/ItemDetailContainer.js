import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//Firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = ({section}) => {
    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getProduct()
        .then((res) => {
            setData(res)
        })
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    const getProduct = async () => {
        const querydb = getFirestore();
        const docRef = doc(querydb, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()

        product.id = docSnapshot.id

        return product
    }

    return(
        <div>
            <h4>{section}</h4>
            <div className="container">
                <ItemDetail data={data} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;