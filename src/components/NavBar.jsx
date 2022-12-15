import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavItem = ({ name, url }) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={url} >{name}</NavLink>
        </li>
    )
}

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>FitBuddy Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <NavItem name="Suplementos" url="/category/suplementos"/>
                       <NavItem name="Equipo deportivo" url="/category/equipo-deportivo"/>
                       <NavItem name="Ropa deportiva" url="/category/ropa"/>
                       <NavItem name="Otros" url="/category/otros"/>
                    </ul>
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;