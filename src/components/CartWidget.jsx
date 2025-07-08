import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart">
            <img className="shopping-cart-icon" src="/shopcart.png"></img>
        </Link>
    )
}

export default CartWidget;