import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, } from "firebase/firestore"
import { db } from "../Config/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const colecctionsRef = collection(db, 'products')
        getDocs(colecctionsRef).then((snaps) => {
            const { docs } = snaps
            const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setProducts(list)

        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer