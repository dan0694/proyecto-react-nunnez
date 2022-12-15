import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) =>{
    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="box my-3 shadow">
                    <div className="image-container">
                        <img className="image" src={item.imagen} alt={item.nombre} />
                    </div>
                    <h5>{item.nombre}</h5>
                    <p>{item.descripcion}</p>
                    <p className="font-weight-bold">$ {item.precio}</p>
                    <p><span className="badge bg-dark">{item.categoria}</span></p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;