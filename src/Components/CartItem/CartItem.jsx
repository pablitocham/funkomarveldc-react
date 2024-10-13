const CartItem = ({id, name, price, quantity, removeItem}) =>{
    return(
        <div className="Carts">
            <h4>{name}</h4>
            <p>Precio:${price} </p>
            <p> Cantidad: {quantity} </p>
            <p> Total: ${price * quantity} </p>
            <button onClick={()=> removeItem(id)} className="BtnRemove">Eliminar</button>
        </div>
    )
}

export default CartItem