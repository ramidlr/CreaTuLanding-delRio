import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'


const NavBar = () => {
return (
    <nav className="nav__wrapper">
        <NavLink to="/">
            <img className="navbar--icon" src="/oana--logo.png" alt="Oana Store Logo" />
        </NavLink>

        <NavLink className="nav-link" to="/category/Nuevo">
        New
        </NavLink>
        <NavLink href="#" className="nav-link" to="/category/Hombre">
        Men
        </NavLink>
        <NavLink href="#" className="nav-link" to="/category/Mujer">
        Women
        </NavLink>
        <CartWidget />
    </nav>
    );
}

export default NavBar;