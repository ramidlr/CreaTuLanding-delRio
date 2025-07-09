import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../service/Firebase";

const Checkout = () => {
    const [buyer, setBuyer] = useState({});
    const { cart, finalPrice, deleteCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [errors, setErrors] = useState({});

    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!buyer.name || buyer.name.trim() === '') newErrors.name = "Nombre requerido";
        if (!buyer.phone || buyer.phone.trim() === '') newErrors.phone = "Teléfono requerido";
        if (!buyer.address || buyer.address.trim() === '') newErrors.address = "Dirección requerida";
        if (!buyer.email || buyer.email.trim() === '') {
            newErrors.email = "Email requerido";
        } else if (!/\S+@\S+\.\S+/.test(buyer.email)) {
            newErrors.email = "Email inválido";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const finishPurchase = (e) => {
        e.preventDefault();
        if (!validateForm()) return; 
        let order = {
            comprador: buyer,
            compras: cart,
            total: finalPrice(),
            date: serverTimestamp()
        };
        const ventas = collection(db, "orders");
        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id);
                deleteCart();
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            {orderId ? (
                <div className="d-flex flex-column align-items-center text-center min-vh-100">
                    <h2 className="fw-bold mb-4">Tu compra se realizó con éxito!</h2>
                    <h3 className="fw-bold mb-4">ID de tu compra: {orderId}</h3>
                    <Link to="/" className="btn btn-dark">
                        Volver al Dashboard
                    </Link>
                </div>
            ) : (
                <div className="d-flex flex-column align-items-center text-center min-vh-100">
                    <h1 className="fw-bold mb-4">Ya casi estamos finalizando!</h1>
                    <form onSubmit={finishPurchase} noValidate>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                name="name"
                                onChange={buyerData}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                name="phone"
                                onChange={buyerData}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Dirección</label>
                            <input
                                type="text"
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                name="address"
                                onChange={buyerData}
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email"
                                onChange={buyerData}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <button className='btn btn-success mb-2' type='submit'>Confirmar compra</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Checkout;
