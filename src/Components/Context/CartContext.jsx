import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0)
    const total = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)

    const addItem = (item, quantity) => {
        if (!isIncart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
            alert('PRODUCTO AGREGADO')
        } else {
            alert(' EL PRODUCTO YA AGREGADO')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }
    const isIncart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )

}


