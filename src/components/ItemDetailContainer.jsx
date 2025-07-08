import { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

const ItemDetailContainer = () => {
    const [detail, setDetail] =useState({})
    const[loading, setLoading]= useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true);
        getOneProduct(id)
        .then((res)=> setDetail(res))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    },[id])

  return (
    <>
    {loading ? <LoaderComponent/> : <ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer