import "../css/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <nav className="nav__wrapper">
        <a href="#">
            <img className="navbar--icon" src="/oana--logo.png" alt="Oana Store Logo" />
        </a>

        <a href="#" className="nav-link">
        New
        </a>
        <a href="#" className="nav-link">
        Deporte
        </a>
        <a href="#" className="nav-link">
        Hombre
        </a>
        <a href="#" className="nav-link">
        Mujer
        </a>
        <a href="#" className="nav-link">
        SALE
        </a>

        <CartWidget />
    </nav>
    );
}

export default NavBar;
