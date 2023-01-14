import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
const Cart = () => {
    const { cartTotal, cart, removeItem, clear, sumaTotal } = useContext(CartContext);

    if(cartTotal() === 0){
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>No se encontraron productos en el carrito</h1>
                        <Link className="btn btn-dark" to={"/"}>Comprar ahora!</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-dark">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>

                            </tr>
                        </thead>
                        <tbody>
                           {cart.map(item =>(
                            <tr key={item.id}>
                                <td>
                                    <img src={item.imagen} alt={item.nombre} width={32} />
                                </td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="text-center align-middle">{item.quantity}</td>
                                <td className="text-center align-middle">$  {item.quantity * item.precio}</td>
                                <td className="text-end align-middle">
                                    <Link onClick={() => {removeItem(item.id)}}> <img src={"images/trash.svg"} title="Eliminar producto" alt={"Eliminar Producto"} width={32}/></Link>
                                </td>
                            </tr>
                           ))}
                           <tr>
                            <td colSpan={2}></td>
                            <td className="text-center"> <b> Suma Total</b></td>
                            <td className="text-center"> <b>$ {sumaTotal()}</b></td>
                            <td className="text-end"><Link to={'/checkout'} className="btn btn-dark">Finalizar compra</Link></td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Cart;