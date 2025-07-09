import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/Firebase";
import { Link } from "react-router-dom";


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((res) => {
                if (res.data()) {
                    setDetail({ id: res.id, ...res.data() });
                } else {
                    setInvalid(true);
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {invalid ? (
                <div className="d-flex flex-column align-items-center" style={{ minHeight: '50vh' }}>
                    <h1 className="mb-4 text-center">El producto no existe! 😭</h1>
                    <Link to='/' className='btn btn-dark'>
                        Ir a home
                    </Link>
              </div>
            ) : loading ? (<LoaderComponent />) : (<ItemDetail detail={detail} />)}
        </>        
    )
}
    export default ItemDetailContainer