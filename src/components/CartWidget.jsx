import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <Link to={'/cart'} className="btn btn-outline-dark position-relative m-3">
                <span><img src="/images/cart.svg" alt={"carrito icono"} title="Ir al carrito" width={30} /></span>
            </Link>
        )
    }

    return (
        <Link to={'/cart'} className="btn btn-outline-dark position-relative m-3">
            <span><img src="/images/cart.svg" alt={"carrito icono"} title="Ir al carrito" width={30} /></span>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
            </span>
        </Link>
    )
}


export default CartWidget;