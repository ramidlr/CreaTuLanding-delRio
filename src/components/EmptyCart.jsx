import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div className="d-flex flex-column align-items-center text-center min-vh-100">
            <h2 className="fw-bold mb-4">El carrito esta vacio!</h2>
            <Link to="/" className="btn btn-dark">
                Ver mas productos
            </Link>
        </div>
    )
}

export default EmptyCart