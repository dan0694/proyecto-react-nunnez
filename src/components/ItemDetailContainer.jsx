import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import arrayData from "../json/products.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayData.find(item => item.id === parseInt(id)))
            }, 1000);
        });

        promise.then((data) =>{
            setItem(data)
        })
    }, [id])

    return(
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;