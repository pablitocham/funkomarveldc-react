import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'


const Cart = () =>{
    const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div className="TextProduct">
                <h1>No tienes Productos</h1>
                <Link to='/products'  className="Option">Ir a Funkos</Link>
            </div>
        )
    }

    return(
        <div className="Carts">
            {cart.map(p=> <CartItem key={p.id} {...p} removeItem={removeItem}/>)}
            <h3>Total a Pagar: ${total}</h3>
            <button onClick={() => clearCart()} className="Btn">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}
export default Cart