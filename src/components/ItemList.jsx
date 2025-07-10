import Item from './Item'
import "../css/ItemList.css";

const ItemList = ({data}) => {
  return (
    <div className='list__wrapper mt-5 mb-5'>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList