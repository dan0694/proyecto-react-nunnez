import React from "react";


const CartWidget = () =>{
    return(
        <button className="btn btn-outline-success position-relative m-3" type="submit">
            <span><img src="./images/cart.svg" alt={"carrito icono"} width={30}/></span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4
            </span>
        </button>
    )
}


export default CartWidget;