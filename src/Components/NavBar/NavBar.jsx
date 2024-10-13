import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <img src="/img/LogoMd.png" className="Logo" />
            </Link>
            <div className="Categories">
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
                <NavLink to={'category/funko'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Funko</NavLink>
                <NavLink to={'super-hero'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>SuperHero</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar