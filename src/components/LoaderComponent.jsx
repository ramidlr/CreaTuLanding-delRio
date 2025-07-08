import "../css/LoaderComponent.css"
import { Spinner } from "react-bootstrap"

const LoaderComponent = () => {
    return (
        <div className='loader__wrapper'>   
            <Spinner animation="grow" variant="primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
    )
}

export default LoaderComponent;