import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () =>{
    const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)

    if(totalQuantity === 0){
        return(
            <div>
                <h1>No tienes Productos</h1>
                <Link to='/products'  className="Option">Productos</Link>
            </div>
        )
    }

    return(
        <div>
            {cart.map(p=> <CartItem key={p.id} {...p} removeItem={removeItem}/>)}
            <h3>Total a Pagar: ${total}</h3>
            <button onClick={() => clearCart()} className="Btn">Limpiar Carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}
export default Cart