import React from "react";
import {NavLink} from "react-router-dom"

const Navigation = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3 text text-center">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
                    <li className="nav-item">
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact={true} to="/meals">Meals</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact={true} to="/drinks">Drinks</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation