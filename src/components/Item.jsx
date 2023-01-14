import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4 col-lg-3">
            <Link to={'/item/' + item.id} className="text-decoration-none text-dark">
                <div className="box my-3 shadow">
                    <div className="image-container">
                        <img className="image" src={item.imagen} alt={item.nombre} />
                    </div>
                    <h5>{item.nombre}</h5>
                    <p className="font-weight-bold">$ {item.precio}</p>
                    <p><span className="badge bg-success">{item.categoria}</span></p>
                </div>
            </Link>
        </div>


    );
}

export default Item;