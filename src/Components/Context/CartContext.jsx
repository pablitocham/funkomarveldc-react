import { createContext, useEffect, useState } from "react";
import { doc, getDoc, } from "firebase/firestore";
import { db } from '../Config/firebaseConfig'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const funkoStore = localStorage.getItem('cart')
        return funkoStore ? JSON.parse(funkoStore) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0)
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)

    const addItem = async (item, quantity) => {
        try {
            const productRef = doc(db, 'products', item.id)
            const productSnap = await getDoc(productRef)
            if (!productSnap.exists()) {
                throw new Error("Funko Marvel-DC no encontrado");
            }

            const currentStock = productSnap.data().stock
            const cartItem = cart.find(prod => prod.id === item.id)
            const currenCartQuantity = cartItem ? cartItem.quantity : 0

            if (currentStock >= (quantity + currenCartQuantity)) {
                if (!isInCart(item.id)) {
                    setCart(prev => [...prev, { ...item, quantity }])
                } else {
                    setCart(prev => prev.map(prod => prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod))
                }
            } Swal.fire({
                title: `Funko ${item.name}`,
                text: "Agregado",
                icon: "info"
            })

        } catch (error) {
            console.log('Error al agregar Funko:', error)
            Swal.fire({
                title: 'Error al Agregar Funko',
                icon: "error"
            })
        }
    }

    const removeItem = async (itemId) => {
        try {
            const funkoRemove = cart.find(prod => prod.id === itemId)
            if (!funkoRemove)
                return
            setCart(prev => prev.filter(prod => prod.id !== itemId))
            Swal.fire({
                title: `Se elimino Funko ${funkoRemove.name}`,
                icon: "success"
            })

        } catch (error) {
            console.log(`Error al eliminar Funko:`, error)
        }
    }

    const clearCart = () => {
        setCart([])
    }
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}


