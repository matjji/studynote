import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="jumbotron">
                    <h1>My Website</h1>
                    <p>A <b>responsive</b> website created by me.</p>
                </div>
            </div>
            
            <div className="navbar">
                <nav>
                    <NavLink to="#" className="isActive">Home</NavLink>
                    <NavLink to="#">Link1</NavLink>
                    <NavLink to="#">Link2</NavLink>
                    <NavLink to="#" className="right">Link3</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;