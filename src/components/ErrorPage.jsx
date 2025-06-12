import { Link } from 'react-router-dom'

const ErrorPage = () => {
    
    return (
        <div>
            <h2>No se pudo encontrar la página!</h2>
            <Link to='/' className="back__button">Volver al Home</Link>
        </div>
    )
}

export default ErrorPage