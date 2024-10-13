import { useContext } from 'react'
import Carrito from './Assets/Carrito.png'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block ' : 'none' }}>
            <img src={Carrito} alt="Logo del carrito de compra" className='Carrito-C' />
            {totalQuantity}
        </Link>
    )
}
export default CartWidget