import { useState, useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { addDoc, collection, getDocs, query, where, writeBatch, Timestamp, documentId } from 'firebase/firestore'
import { db } from "../Config/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"




const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart, total: total, date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAdded?.quantity
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })


            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                alert('Art agotado')
            }
        } catch (error) {
            console.error('Error', error)
        }

    }

    if (orderId) {
        return <h1 className="Check"> El id de su orden es {orderId}</h1>
    }


    return (
        <div>

            <h1 className="Check"> Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>

    )

}

export default Checkout


