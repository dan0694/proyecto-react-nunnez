import { useEffect } from "react";
import { React, useState } from "react";

const ItemCount = ({stock}) => {

    const [cantidad, setCantidad] = useState(1);
    const [disponibles, setDisponibles] = useState(stock);

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

    const onAdd = () =>{
        if(disponibles > 0 && cantidad <= disponibles){
            console.log('Se han agregado '+cantidad+' productos al carrito');
            setDisponibles(disponibles-cantidad);
            setCantidad(1);
        } else{
            console.log('No quedan disponibles');
        }
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
                    <button className="btn btn-outline-dark" onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;