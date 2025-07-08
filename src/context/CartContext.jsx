import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

// funcion para agregar un item, o sumar cantidad si ya existe.
    const addItemToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = cart.map(prod => {
                if(item.id === prod.id){
                    return {...prod, quantity: prod.quantity + quantity}
                } else {
                    return prod;
                }
            })
            setCart(newCart);
        } 
        else {
            setCart([...cart, {...item, quantity}]);
        }
    }

// funcion para eliminar un item del carrito
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }   

// funcion para borrar contenido total del carrito
    const deleteCart = () => {
        setCart([]);
    }

// funcion para ver si existe este item en el carrito
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }
    
// funcion para sumar cantidad total de items
// funcion para sumar total a pagar

    return (
        <CartContext.Provider value={{cart, addItemToCart, removeItem, deleteCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}