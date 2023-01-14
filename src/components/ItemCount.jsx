import { useEffect } from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [cantidad, setCantidad] = useState(1);
    const [disponibles, setDisponibles] = useState(stock);
    const [vendido, setvendido] = useState(false);

    const agregarCantidad = () => {
        if(cantidad < disponibles){
            setCantidad(cantidad + 1);
        }
    }
    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        } 
    }

    useEffect(() =>{
        setDisponibles(stock);
    }, [stock])

    const addToCart = (quantity) =>{
        setvendido(true);
        setDisponibles(disponibles -quantity)
        onAdd(quantity);
        setCantidad(1)
    }

    return (
        <div className="itemCount">
            <div className="d-flex p-2">
                <div className="pe-1">
                    <div className="btn-group" role="group" aria-label="Basic example" style={{borderWidth:1, borderStyle:"solid", borderColor:"#efefef"}}>
                        <button type="button" className="btn btn-light p-2" onClick={disminuirCantidad}>-</button>
                        <button type="button" className="btn btn-light p-2" disabled>{cantidad}</button>
                        <button type="button" className="btn btn-light p-2" onClick={agregarCantidad}>+</button>
                    </div>
                </div>
                <div className="">
                  {vendido ? <Link to={'/cart'} className='btn btn-outline-dark'> Terminar compra</Link> : <button className="btn btn-outline-dark" onClick={() => {addToCart(cantidad)}}>Agregar</button>}
                </div>
            </div>
        </div>
    );
}

export default ItemCount;