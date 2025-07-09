import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";   

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)

    return (
        <Link to="/cart">
            <img className="shopping-cart-icon" src="/shopcart.png"></img>
            <Badge bg="danger">{cartQuantity()}</Badge>
        </Link>
    )
}

export default CartWidget;