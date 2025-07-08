import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import '../css/ItemDetail.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {
  const {addItemToCart} = useContext(CartContext);
  
  const[purchase, setPurchase] = useState(false);
  
  const onAdd = (cantidad) => {
    addItemToCart(detail, cantidad);
    setPurchase(true);
  }

  return (
    <div className='product__information'>
        <h2 className='product__title mb-5'>{detail.name}</h2>
        <img src={detail.img} alt={detail.name} className="img-fluid mx-auto d-block product-img"/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock: {detail.stock}</p>
        { purchase ? <Link className='btn btn-dark' to='/cart'> Ir al carrito</Link>
        : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail