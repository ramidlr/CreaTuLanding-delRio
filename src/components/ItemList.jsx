import Item from './Item'
import "../css/ItemList.css";

const ItemList = ({data}) => {
  return (
    <div className='list__wrapper'>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList