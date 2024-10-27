import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../Config/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', itemId,)
        getDoc(docRef).then((snaps) => {
            {
                setProduct({ id: snaps.id, ...snaps.data() })

            }
        })

    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail  {...product} /> : <p>Loading</p>}
        </div>
    )
}
export default ItemDetailContainer