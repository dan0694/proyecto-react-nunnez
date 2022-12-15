import React from "react";
import arrayData from "../json/products.json";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
 
 const ItemListContainer = ({greeting}) => {

    const [items, setTitems] = useState([]);
    const {id} = useParams();

    useEffect(() =>{
        const promise = new Promise((resolve) =>{
            setTimeout(() =>{
                resolve(id ? arrayData.filter(item => item.categoria === id): arrayData);
            }, 1000)
        });

        promise.then((data) =>{
            setTitems(data);
        });
        
    }, [id]);

    return(
        <div className="container">
        <ItemList items={items}/>
        </div>
        
    )
 }

 export default ItemListContainer;