import React from "react";
import '../Pages/Index.css'
import { Link } from "react-router-dom"

const Index = () => {
    return (
        <div className="Portada">
            <h1 className="Index"> BIENVENIDOS</h1>
            <p>Aquí encontraras tus Funkos <span className="Md">Marvel-DC</span> tenemos una gran variedad a eleccion, próximamente se hablitará SuperHero</p>
            <Link to='/products' className="Productos"> Elige tu Funko</Link>
        </div>
    )

}
export default Index