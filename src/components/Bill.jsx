import React from "react";
import { Link, useParams } from "react-router-dom";

const Bill = () => {

    const {id} = useParams();
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <div role="alert" className="alert alert-success text-center">
                        <h1>Hemos procesado tu pedido!</h1>
                        <h2>Tu número de orden es: {id}</h2>
                        <Link className="btn btn-dark my-2" to={"/"}>Volver al inicio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill;