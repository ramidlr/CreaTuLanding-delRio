import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../service/Firebase";
import { useForm } from "react-hook-form";

const Checkout = () => {

    const [orderId, setOrderId] = useState('')
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()
    const { cart, finalPrice, deleteCart } = useContext(CartContext)

    const finishPurchase = (formData) => {
        let order = {
            comprador: {
                name: formData.name,
                phone: formData.phone,
                address: formData.address,
                email: formData.email
            },
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
                orderId ? (
                    <div className="d-flex flex-column align-items-center text-center min-vh-100">
                        <h2 className="fw-bold mt-4 mb-4" > Tu compra se realizo con exito!</h2>
                        <h3 className="fw-bold mb-4" > ID de tu compra: {orderId}</h3>
                        <Link to="/" className="btn btn-dark">
                            Volver al Dashboard
                        </Link>
                    </div>
                ) : (
                    <div className="d-flex flex-column align-items-center text-center min-vh-100">
                        <h1 className="fw-bold mb-4">Ya casi estamos finalizando!</h1>
                        <form onSubmit={handleSubmit(finishPurchase)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" name="name" placeholder="Ingrese su nombre" {...register("name", { required: true, minLength: 2, maxLength: 20 })} />
                                {errors?.name?.type === 'required' && <span className="text-danger">El campo es requerido</span>}
                                {errors?.name?.type === 'minLength' && <span className="text-danger">El campo debe tener al menos 2 caracteres</span>}
                                {errors?.name?.type === 'maxLength' && <span className="text-danger">El campo debe tener un maximo de 20 caracteres</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" name="phone" placeholder="+54 XX XX XX XX" {...register("phone", { required: true, minLength: 8 })} />
                                {errors?.phone?.type === 'required' && <span className="text-danger">El campo es requerido</span>}
                                {errors?.phone?.type === 'minLength' && <span className="text-danger">El campo debe tener al menos 8 digitos</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="address" placeholder="Ingrese su direccion" {...register("address", { required: true, minLength: 5, maxLength: 50 })} />
                                {errors?.address?.type === 'required' && <span className="text-danger">El campo es requerido</span>}
                                {errors?.address?.type === 'minLength' && <span className="text-danger">El campo debe tener al menos 5 caracteres</span>}
                                {errors?.address?.type === 'maxLength' && <span className="text-danger">El campo debe tener un maximo de 50 caracteres</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Ingrese su correo electronico" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
                                {errors?.email?.type === 'required' && <span className="text-danger">El campo es requerido</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repita su Email</label>
                                <input type="email" className="form-control" name="secondemail" placeholder="Repita su correo electronico" {...register("secondemail", { required: true, validate: {equalMails: mail2 => mail2 === getValues().email} })} />
                                {errors?.secondemail?.type === 'required' && <span className="text-danger">El campo es requerido</span>}
                                {errors?.secondemail?.type === 'equalMails' && <span className="text-danger">Los correos deben ser iguales</span>}
                            </div>
                            <button className='btn btn-success mb-2' type='submit'>Confirmar compra</button>
                        </form>
                    </div>
                )}
        </>
    )
}

export default Checkout
