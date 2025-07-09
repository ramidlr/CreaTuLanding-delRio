import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="d-flex flex-column align-items-center text-center min-vh-100">
            <h2 className="fw-bold mb-4">¡No se pudo encontrar la página!</h2>
            <Link to="/" className="btn btn-dark">
                Volver al Dashboard
            </Link>
        </div>
    );
};

export default ErrorPage;
