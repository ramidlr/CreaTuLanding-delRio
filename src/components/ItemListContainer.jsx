import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "../css/ItemListContainer.css"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const[loading, setLoading]= useState(false)
    const {categoryId} = useParams();

    useEffect(()=>{
        setLoading(true);
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                setData(respuesta)
            }
        })
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    },[categoryId])

return(
    <div className="main__wrapper">
        <h1 className="banner__title mb-5">{props.greetings}</h1>
        {loading ? <LoaderComponent/> : <ItemList data={data}/>}
    </div>
)
}


export default ItemListContainer