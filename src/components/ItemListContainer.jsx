import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "../css/ItemListContainer.css"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/Firebase"

const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();

    //FIRESTORE

    useEffect(() => {
        setLoading(true);
        const productCollection = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")
        getDocs(productCollection)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
        return (() => {
            setData([]);
        })
    }, [categoryId])

    return (
        <div className="main__wrapper">
            <h1 className="banner__title mb-5">{props.greetings}</h1>
            {loading ? <LoaderComponent /> : <ItemList data={data} />}
        </div>
    )
}


export default ItemListContainer