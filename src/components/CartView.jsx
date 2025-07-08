import  '../css/CartView.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const {cart, deleteCart, removeItem} = useContext(CartContext);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
            <h2 className="fw-bold mb-4">Ya casi has finalizado tu compra</h2>
            
            <div>
                {
                    cart.map((compra) => (
                        <div key={compra.id} className="text-center p-4 border rounded mb-4">
                            <img 
                                src={compra.img} 
                                alt={compra.name} 
                                className="img-fluid mx-auto d-block mb-3 compra-img"
                            />

                            <h5 className="fw-bold">{compra.name}</h5>
                            <p>Precio unitario: ${compra.price},00</p>
                            <p>Cantidad: {compra.quantity}</p>
                            <p className="fw-bold">Total: ${compra.price * compra.quantity},00</p>

                            <div className="d-flex justify-content-center gap-2 mt-3">
                                <button className="btn btn-danger" onClick={() => removeItem(compra.id)}>Eliminar</button>
                            </div>
                        </div>

                        //total a pagar
                        
                    ))
                }
            </div>

            <span>Total a pagar</span>
            <div className='text-center p-4 border rounded mb-4'>
                {/* <button className="btn btn-success" onClick={() => deleteCart()}>Vaciar carrito</button> */}
                <button className="btn btn-warning" onClick={deleteCart}>Vaciar carrito</button>
            </div>
        </div>
    );
}

export default CartView