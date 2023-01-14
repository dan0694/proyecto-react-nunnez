import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";



const Checkout = () => {
    const { cart, sumaTotal, clear } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, email: email, phone: telefono },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, proce_total: item.precio * item.quantity })),
            date: `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumaTotal()
        }

        const db = getFirestore();
        const ordersColection = collection(db, 'orders')
        addDoc(ordersColection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => { setNombre(e.target.value) }}></input>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }}></input>
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="phone" onInput={(e) => { setTelefono(e.target.value) }}></input>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-dark" onClick={generarOrden}>Confirmar orden</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.imagen} alt={item.nombre} width={32} />
                                    </td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">$  {item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}></td>
                                <td className="text-center"><b> Total a pagar</b></td>
                                <td className="text-center"> <b>$ {sumaTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                {orderId ?
                    <Navigate to={"/bill/"+orderId}/> : ""}
            </div>
        </div>

    )
}

export default Checkout;