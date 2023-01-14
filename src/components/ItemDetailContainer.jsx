import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();


    // Promesa para acceder a los datos desde firestore
    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, 'items', id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });
                setLoading(false)
            } else {
                console.log("Error, producto no encontrado.");
                setLoading(false)

            }
        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading /> :
                <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer;