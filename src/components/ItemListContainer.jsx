import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const documento = collection(db, 'items');
        const q = id ? query(documento, where('categoria', '==', id)) : documento;

        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) =>
                ({ id: doc.id, ...doc.data() })
            ));
            setLoading(false)

        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading /> :
                <ItemList items={items} />
            }
        </div>

    )
}

export default ItemListContainer;