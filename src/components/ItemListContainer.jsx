import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "../css/ItemListContainer.css";


const ItemListContainer = (props) => {
    const[data, setData]= useState([])
    const {categoryId} = useParams()

    console.log(categoryId)
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                setData(respuesta.filter((prod)=> prod.category === categoryId))
            }else{
                setData(respuesta)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])

return(
    <div className="main__wrapper">
        <h1 className="banner__title">{props.greetings}</h1>
        <ItemList data={data}/>
    </div>
)
}


export default ItemListContainer