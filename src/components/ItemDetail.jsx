import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);


    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                {JSON.stringify(item) === '{}' ? 
                <div className="box my-3 shadow">
                    <h1 className="py-3 fs-3">Producto no encontrado</h1>
                    <Link className="btn btn-dark mb-2" to={"/"}>Volver al inicio</Link>
                </div>
                
                :
                    <div className="box my-3 shadow">
                        <div className="image-container">
                            <img className="image" src={item.imagen} alt={item.nombre} />
                        </div>
                        <h5>{item.nombre}</h5>
                        <p>{item.descripcion}</p>
                        <p className="font-weight-bold">$ {item.precio}</p>
                        <p><span className="badge bg-success">{item.categoria}</span></p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        <Link className="btn btn-dark my-2" to={"/"}>Volver al inicio</Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ItemDetail;