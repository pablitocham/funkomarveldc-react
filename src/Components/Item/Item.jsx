import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ id, name, price, stock, img }) => {
    const thereIsStock = stock === 0
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className=" ItemFooter">
                {thereIsStock ?(
                    <p className="stockMsj">Nos quedamos sin Funko </p>
                ):(
                <Link to={`/item/${id}`} className='Option'> Ver Detalles</Link>
                )}
            </footer>
        </article>
    )
}
export default Item