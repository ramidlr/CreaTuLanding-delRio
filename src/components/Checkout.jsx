import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../service/Firebase";

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const { cart, finalPrice, deleteCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    console.log(buyer)
    const finishPurchase = (e) => {
        e.preventDefault()
        let order = {
            comprador: buyer,
            compras: cart,
            total: finalPrice(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then((res) => {
            setOrderId(res.id)
            deleteCart()
        })
        .catch((error) => console.log(error))
    }


    return (

        <>
            {
                orderId ?
                    <div className="d-flex flex-column align-items-center text-center min-vh-100">
                        <h2 className="fw-bold mb-4" > Tu compra se realizo con exito!</h2>
                        <h3 className="fw-bold mb-4" > ID de tu compra: {orderId}</h3>
                        <Link to="/" className="btn btn-dark">
                            Volver al Dashboard
                        </Link>
                    </div>
                    :
                    <div className="d-flex flex-column align-items-center text-center min-vh-100">
                        <h1 className="fw-bold mb-4">Ya casi estamos finalizando!</h1>
                        <form onSubmit={finishPurchase}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="name" onChange={buyerData} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" name="phone" onChange={buyerData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="address" onChange={buyerData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" onChange={(e) => setValidMail(e.target.value)} />
                            </div>

                            <button className='btn btn-success mb-2' type='submit'>Confirmar compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout
