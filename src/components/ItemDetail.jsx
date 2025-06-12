import ItemCount from './ItemCount'
import '../css/ItemDetail.css'

const ItemDetail = ({detail}) => {

  const onAdd = (cantidad)=>{
    alert(`Agregaste ${cantidad} de items`)
  }

  return (
    <div className='product__information'>
        <h2>Detalle del producto: {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock}</p>
        <ItemCount stock={detail.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail